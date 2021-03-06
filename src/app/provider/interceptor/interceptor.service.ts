import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
	HttpErrorResponse,
	HttpClient,
	HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
	localToken: any;
	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.localToken = localStorage.getItem('sid');
		console.log('sid === ', this.localToken);
		// request = request.clone({
		// 	setHeaders: {
		// 		'Access-Control-Allow-Origin': '*',
		// 		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, HEAD, DELETE',
		// 		enctype: 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'
		// 	}
		// });

		if (!request.headers.has('Content-Type')) {
			request = request.clone({
				setHeaders: {
					'Content-Type': 'application/json'
				}
			});
		}

		request = request.clone({
			headers: request.headers.set('Accept', 'application/json')
		});

		if (this.localToken) {
			request = request.clone({
				setHeaders: {
					//sid: this.localToken
					sid: 'f5f82f56e798cf8e18d08ab5111f6f164857d6db5f7d80215c4138e8'
				}
			});
		}

		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					// console.log('event--->>>', event);
				}
				return event;
			}),
			catchError((error: HttpErrorResponse) => {

				console.log('Common Error object in  interceptor ...');

				console.log(error);

				if (error.status === 401) {
					console.log('Unauthorised interceptor ...');
				}
				return throwError(error);
			}));
	}
}

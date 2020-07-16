import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class CommonApiService {

	basePath = environment.mainBaseURL;
	loaderToShow: any;
	private data: any;

	constructor(private http: HttpClient, private loadingCtrl: LoadingController) { }

	setValue(data: any) {
		this.data = data;
	}

	getValue() {
		return this.data;
	}

	handleError(error) {
		console.log('Main Error : ');
		console.log(error);
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		console.log(error);
		return throwError(error);
	}

	postData(supportingPath, requestJSON) {
		return this.postDataWithInterceptor(supportingPath, requestJSON);
	}

	postDataWithInterceptor(supportingPath, inputData) {
		return this.http.post(this.basePath + supportingPath, inputData).pipe(
			retry(3),
			catchError(this.handleError)
		);
	}

	getData(api): Observable<any> {
		return this.http.get<any>(this.basePath + api, { observe: 'response' }).pipe(
			map(response => {
				console.log(response);
				return response;
			}),
			retry(3),
			catchError(this.handleError)
		);
	}

	putDataWithInterceptor(api, body) {
		return this.http.put(this.basePath + api, body).pipe(
			retry(3),
			catchError(this.handleError)
		);
	}

	// Show Loader in as per messages
	showLoader(msg) {
		this.loaderToShow = this.loadingCtrl.create({
			message: msg,
		}).then((res) => {
			res.present();

			res.onDidDismiss().then((dis) => {
				console.log('Loading dismissed!');
			});
		});
	}

	// Hide Loader
	hideLoader() {
		setTimeout(() => {
			this.loadingCtrl.dismiss();
		}, 1000);
	}

}

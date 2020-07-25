import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonApiService } from 'src/app/provider/commonAPI/common-api.service';

enum COLORS {
	GREY = '#E0E0E0',
	GREEN = '#76FF03',
	Yellow = '#FFCA28',
	RED = '#DD2C00'
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	step = 'step1';
	@ViewChild('step1') step1: any;
	@ViewChild('step2') step2: any;
	@ViewChild('step3') step3: any;
	@ViewChild('sc1') sc1: any;
	@ViewChild('sc2') sc2: any;

	constructor(
		public commonApiService: CommonApiService
	) { }
	ngOnInit() {

	}

	onClickCall(e) {
		e.stopPropagation();
		console.log('hi...!');
	}

	//Step Progress-bar
	next() {
		if (this.step === 'step1') {
			this.step = 'step2';
			this.step2.nativeElement.classList.remove('active');
			this.step3.nativeElement.classList.remove('active');
			this.sc2.nativeElement.classList.remove('active');
			this.step1.nativeElement.classList.add('active');
			this.sc1.nativeElement.classList.add('active');

		} else if (this.step === 'step2') {
			this.step = 'step3';
			// this.step2.nativeElement.classList.remove('is-active');
			this.step2.nativeElement.classList.add('active');
			this.sc2.nativeElement.classList.add('active');

		} else if (this.step === 'step3') {
			this.step = 'step1';
			this.step3.nativeElement.classList.add('active');

		}
	}

	payNow() {
		const orderData = {
			"ref_doctype": "Sales Order",
			"ref_docname": "SAL-ORD-2020-00001",
			"amount": 105,
			"payment_type": "Order Payment",
			"party_email": "sagartiparadi@gmail.com",
			"party_name": "Sagar",
			"party_phone": "9096265754"
		};

		this.commonApiService.showLoader('Loading in...');
		this.commonApiService.postDataPayment("http://147.139.6.184/api/resource/Cashfree Payment Request Log", orderData)
			.subscribe((data: any) => {
				console.log('postPaymentAPIs - success API', data);
				this.commonApiService.hideLoader();

			}, err => {
				console.log('postPaymentAPIs API Error', err.error.message);
				this.commonApiService.showToast(err.error.message);
				this.commonApiService.hideLoader();
				console.log(err);
				if (err.name === 'TimeoutError') {
					console.log('TimeoutError');
				}
			});
	}
}

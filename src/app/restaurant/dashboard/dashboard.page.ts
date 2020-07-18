import { Component, OnInit, ViewChild } from '@angular/core';

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
}

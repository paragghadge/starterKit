import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastController, ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CommonApiService } from 'src/app/provider/commonAPI/common-api.service';

@Component({
	selector: 'app-add-shop-details',
	templateUrl: './add-shop-details.page.html',
	styleUrls: ['./add-shop-details.page.scss'],
})
export class AddShopDetailsPage implements OnInit {
	step = 'step1';
	@ViewChild('step1') step1: any;
	@ViewChild('step2') step2: any;
	@ViewChild('step3') step3: any;
	@ViewChild('sc1') sc1: any;
	@ViewChild('sc2') sc2: any;

	public shopDetailsForm: FormGroup;
	userData: any;

	constructor(
		public toastCtrl: ToastController,
		public formBuilder: FormBuilder,
		public navCtrl: NavController,
		private storage: Storage,
		public commonAPIService: CommonApiService,
		public modalController: ModalController
	) {
		this.storage.get('UserData').then((val) => {
			console.log('Your user details is', JSON.parse(val));
			this.userData = JSON.parse(val);
		});
		this.shopDetailsForm = this.formBuilder.group({
			company_name: ['', Validators.required],
			authorized_person_name: ['', Validators.required],
			mobile_no: ['', Validators.required],
			alternate_mobile_no: [''],
		});
	}

	ngOnInit() { }

	ionViewDidEnter() {
		// this.next();
	}

	onClickContinue() {
		console.log('shop address : ', this.shopDetailsForm.value);
		this.navCtrl.navigateForward('/service-items');
	}

	async showToast(message: string) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2000,
			position: 'bottom'
		});
		toast.present();
	}

	// Step Progress-bar
	// next() {
	// 	if (this.step === 'step1') {
	// 		this.step = 'step2';
	// 		this.step2.nativeElement.classList.remove('active');
	// 		this.step3.nativeElement.classList.remove('active');
	// 		this.sc2.nativeElement.classList.remove('active');
	// 		this.step1.nativeElement.classList.add('active');
	// 		this.sc1.nativeElement.classList.add('active');

	// 	} else if (this.step === 'step2') {
	// 		this.step = 'step3';
	// 		// this.step2.nativeElement.classList.remove('is-active');
	// 		this.step2.nativeElement.classList.add('active');
	// 		this.sc2.nativeElement.classList.add('active');

	// 	} else if (this.step === 'step3') {
	// 		this.step = 'step1';
	// 		this.step3.nativeElement.classList.add('active');

	// 	}
	// }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastController, ModalController, NavController } from '@ionic/angular';
import { AddressModalPage } from '../modals/address-modal/address-modal.page';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CommonApiService } from '../provider/commonAPI/common-api.service';

@Component({
	selector: 'app-user-address',
	templateUrl: './user-address.page.html',
	styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {
	dataReturned: any;
	userData: any;
	signUpData: any;
	requestData: any;
	public addressForm: FormGroup;
	constructor(
		public toastCtrl: ToastController,
		public formBuilder: FormBuilder,
		public route: ActivatedRoute,
		private storage: Storage,
		public navCtrl: NavController,
		public commonAPIService: CommonApiService,
		public modalController: ModalController
	) {
		this.signUpData = this.commonAPIService.getValue();
		console.log('get data = ', this.signUpData);
		this.storage.get('UserData').then((val) => {
			console.log('Your user details is', JSON.parse(val));
			this.userData = JSON.parse(val);
		});
		this.addressForm = this.formBuilder.group({
			gpsLocation: [''],
			appartmentName: ['', Validators.required],
			tower: [''],
			flatNo: ['', Validators.required],
			address: ['', Validators.required],
			landmark: ['']
		});
	}

	ngOnInit() {
	}

	getRequestData() {
		return this.requestData = {
			user_type: 'Customer',
			data: {
				customer_name: this.userData.customer_doc.customer_name,
				address_line1: this.addressForm.controls.appartmentName.value,
				address_line2: this.addressForm.controls.address.value,
				address_map: this.addressForm.controls.gpsLocation.value,
				block_name: this.addressForm.controls.tower.value,
				flat_number: this.addressForm.controls.flatNo.value,
				latitude: '18.520430',
				longitude: '73.856743',
				accuracy: '3',
				landmark: this.addressForm.controls.landmark.value,
				city: 'Pune',
				state: 'Maharashtra',
				phone: this.userData.customer_doc.mobile_no,
				doc_id: this.userData.customer_doc.name
			}
		}
	}

	async openModal() {
		const modal = await this.modalController.create({
			component: AddressModalPage,
			cssClass: 'custom-modal',
			componentProps: {
				paramID: 123,
				addressData: this.addressForm.controls.flatNo.value + ' ' +
					this.addressForm.controls.tower.value + ' ' +
					this.addressForm.controls.appartmentName.value + ' ' +
					this.addressForm.controls.address.value + ' ' +
					this.addressForm.controls.landmark.value
			}
		});

		modal.onDidDismiss().then((dataReturned) => {
			if (dataReturned !== null && dataReturned.data === 'save') {
				this.dataReturned = dataReturned.data;
				console.log('Modal Sent Data :' + JSON.stringify(dataReturned));
				console.log('request data = ', this.getRequestData());


				this.commonAPIService.showLoader('Signing in...');
				this.commonAPIService.postData('method/sys_core.sys_core.create_address', this.getRequestData()).subscribe((data) => {
					console.log('User signup - success API', data);
					this.commonAPIService.hideLoader();
					this.showToast('Address added successfully.');
					this.addressForm.reset();
					// this.navCtrl.navigateBack('/login');
				}, err => {
					console.log('API Error');
					this.showToast(err.error._app_messages[0].message);
					this.commonAPIService.hideLoader();
					console.log(err);
					if (err.name === 'TimeoutError') {
						console.log('TimeoutError');
					}
				});

			}
		});

		return await modal.present();
	}

	async showToast(message: string) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2000,
			position: 'bottom'
		});
		toast.present();
	}

}

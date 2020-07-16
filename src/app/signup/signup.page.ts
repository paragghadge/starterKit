import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CommonApiService } from '../provider/commonAPI/common-api.service';

@Component({ selector: 'app-signup', templateUrl: './signup.page.html', styleUrls: ['./signup.page.scss'] })
export class SignupPage implements OnInit {
	public otpLabel = 'SEND OTP';
	public tempId: any;
	public requestData: any;
	public userTab = true;
	public isDisabled = false;
	public passwordType = 'password';
	public confirmPasswordType = 'password';
	public userForm: FormGroup;

	constructor(
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		private storage: Storage,
		public commonAPIService: CommonApiService,
		public formBuilder: FormBuilder
	) {
		this.userForm = this.formBuilder.group({
			userName: [''],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', Validators.required],
			otp: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
			codeType: [''],
			codeValue: [''],
			agreement: [false, Validators.required]
		});
	}

	ngOnInit() { }

	onClickTabs(tab: any) {
		console.log('tab = ', tab);
		this.userForm.reset();
		this.userTab = tab === 'Customer' ? true : false;
	}

	showPassword() {
		this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
	}

	showConfirmPassword() {
		this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
	}

	gotoLogin() {
		this.navCtrl.navigateBack('/login');
	}

	getRequestData() {
		return this.requestData = {
			user_type: this.userTab ? 'Customer' : 'Vender',
			data: {
				latitude: '',
				longitude: '',
				accuracy: '',
				customer_name: this.userForm.controls.userName.value,
				first_name: this.userForm.controls.firstName.value,
				last_name: this.userForm.controls.lastName.value,
				address_line1: '',
				address_line2: '',
				landmark: '',
				city: '',
				territory: '',
				state: '',
				phone: this.userForm.controls.phone.value,
				otp: this.userForm.controls.otp.value,
				tmp_id: this.tempId.tmp_id,
				email_id: this.userForm.controls.email.value,
				password: this.userForm.controls.password.value,
				address_map: '',
				society_name: '',
				block_name: '',
				flat_number: '',
			}
		}
	}

	submitSignUpForm() {
		if (!this.userForm.controls.agreement.value) {
			this.showToast('Please accept terms & condition to proceed.');
			return;
		}
		if (this.userForm.controls.password.value !== this.userForm.controls.confirmPassword.value) {
			this.showToast('Password & confirm password must be same.');
			return;
		}
		this.userForm.controls.userName.setValue(this.userForm.controls.firstName.value + ' ' + this.userForm.controls.lastName.value);
		console.log('Signup values = ', this.getRequestData());

		this.commonAPIService.showLoader('Signing in...');
		this.commonAPIService.postData('method/sys_core.sys_core.create_new_user', this.getRequestData()).subscribe((data) => {
			console.log('User signup - success API', data);
			this.commonAPIService.hideLoader();
			this.showToast('Successfully registered user.');
			this.navCtrl.navigateBack('/login');
		}, err => {
			console.log('Signup API Error', err.error._app_messages[0].message);
			this.showToast(err.error._app_messages[0].message);
			this.commonAPIService.hideLoader();
			console.log(err);
			if (err.name === 'TimeoutError') {
				console.log('TimeoutError');
			}
		});

		// this.commonAPIService.setValue(this.userForm);
		// if (!this.userTab) {
		// 	this.navCtrl.navigateForward('/add-shop-details');
		// } else {
		// 	this.navCtrl.navigateForward('/user-address');
		// }
	}

	setEnable() {
		this.isDisabled = true;
		setTimeout(() => {
			this.otpLabel = 'Re-send Otp';
			this.isDisabled = false;
		}, 10000);
	}

	onClickResendOTP() {
		this.setEnable();
		const reqData = {
			mobile_no: this.userForm.value.phone
		};
		this.commonAPIService.showLoader('Request for OTP...');
		this.commonAPIService.postData('method/sys_core.sys_core.api.login.get_mobile_verified', reqData).subscribe((response) => {
			console.log('OTP - success API', response);
			this.tempId = response;
			this.commonAPIService.hideLoader();
			this.showToast('Successfully sent OTP.');
			this.storage.set('tmp_id', this.tempId);
			this.storage.get('tmp_id').then((val) => {
				console.log('Your age is', val);
			});
		}, err => {
			console.log('OTP API Error ', err.error._app_messages[0].message);
			this.showToast(err.error._app_messages[0].message);
			this.commonAPIService.hideLoader();
			console.log(err);
			if (err.name === 'TimeoutError') {
				console.log('TimeoutError');
			}
		});
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

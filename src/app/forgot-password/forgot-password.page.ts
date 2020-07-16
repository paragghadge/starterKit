import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CommonApiService } from '../provider/commonAPI/common-api.service';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.page.html',
	styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
	public mobile: number;
	public otp: number;
	public username: string;
	public password: string;
	public confirmPassword: string;
	public showReset: boolean;
	public pageHeader: string;
	public passwordType = 'password';
	public confirmPasswordType = 'password';
	public otpLabel = 'SEND OTP';
	public tmpId: any;
	public isDisabled = false;

	constructor(
		public toastCtrl: ToastController,
		public commonAPIService: CommonApiService,
		private storage: Storage,
		public navCtrl: NavController
	) { }

	ngOnInit() {
		this.showReset = false;
		this.pageHeader = 'Forgot Password';
	}

	showPassword() {
		this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
	}

	showConfirmPassword() {
		this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
	}

	submit() {
		this.isMobileNumberValid();
		const requestData = {
			mobile_no: this.mobile,
			tmp_id: this.tmpId,
			otp: this.otp
		};

		this.commonAPIService.showLoader('Signing in...');
		this.commonAPIService.postData('method/sys_core.sys_core.api.login.validate_otp', requestData).subscribe((data) => {
			console.log('Validate OTP while reset pwd - success API', data);
			let responseData: any = {};
			responseData = data;
			if (data) {
				if (responseData.home_page === '/me') {
					this.showReset = true;
					this.pageHeader = 'Reset Password';
				}
			}
			this.commonAPIService.hideLoader();
		}, err => {
			console.log('Validate OTP while reset pwd Error', err.error._app_messages[0].message);
			this.showToast(err.error._app_messages[0].message);
			this.commonAPIService.hideLoader();
			console.log(err);
			if (err.name === 'TimeoutError') {
				console.log('TimeoutError');
			}
		});
	}

	loginWithNewPassword() {
		const requestData = {
			user_id: this.username,
			new_password: this.password
		};
		this.commonAPIService.showLoader('Signing in...');
		this.commonAPIService.postData('method/sys_core.sys_core.api.login.reset_password', requestData).subscribe((data) => {
			console.log('Validate OTP while reset pwd - success API', data);
			if (data) {
				this.navCtrl.navigateBack('/login');
			}
			this.commonAPIService.hideLoader();
		}, err => {
			console.log('Validate OTP while reset pwd Error', err.error._app_messages[0].message);
			this.showToast(err.error._app_messages[0].message);
			this.commonAPIService.hideLoader();
			console.log(err);
			if (err.name === 'TimeoutError') {
				console.log('TimeoutError');
			}
		});
	}

	isMobileNumberValid() {
		if (!this.mobile || this.mobile.toString().length !== 10) {
			this.showToast('Please enter valid mobile number.');
			return;
		}
	}

	onClickResendOTP() {
		// if(this.isMobileNumberValid()){
		console.log('this.isMobileNumberValid()..', this.isMobileNumberValid());
		this.setEnable();
		const reqData = {
			mobile_no: this.mobile
		};
		this.commonAPIService.showLoader('Request for OTP...');
		this.commonAPIService.postData('method/sys_core.sys_core.api.login.login_via_mobile', reqData).subscribe((response) => {
			console.log('OTP - success API', response);
			let responseData: any = {};
			responseData = response;
			if (response) {
				this.tmpId = responseData.tmp_id;
				console.log('this.tempId..', this.tmpId);
				this.commonAPIService.hideLoader();
				this.showToast('Successfully sent OTP.');
				this.storage.set('tmp_id', response);
				this.storage.get('tmp_id').then((val) => {
					console.log('Your value is', val);
				});
			}
		}, err => {
			console.log('OTP API Error ', err.error._app_messages[0].message);
			this.showToast(err.error._app_messages[0].message);
			this.commonAPIService.hideLoader();
			console.log(err);
			if (err.name === 'TimeoutError') {
				console.log('TimeoutError');
			}
		});
		// }
	}

	setEnable() {
		this.isDisabled = true;
		setTimeout(() => {
			this.otpLabel = 'Re-send Otp';
			this.isDisabled = false;
		}, 30000);
	}

	resend() {
		console.log('this = ', this);
	}

	login() {
		console.log('this = ', this);
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

import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CommonApiService } from '../provider/commonAPI/common-api.service';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	public passwordType = 'password';
	public username: string;
	public password: string;
	constructor(
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		private storage: Storage,
		public commonAPIService: CommonApiService
	) { }

	ngOnInit() {
	}

	showPassword() {
		this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
	}

	gotoSignup() {
		this.navCtrl.navigateForward('/signup');
	}

	gotoForgotPassword() {
		this.navCtrl.navigateForward('/forgot-password');
	}

	onLogin() {
		if (!this.username || !this.password) {
			this.showToast('Please enter credentials.');
			return;
		}
		// this.username = 'dev.pranay92@gmail.com';
		// this.password = 'password';
		// this.username = 'vender1@nomail.com';
		// this.password = 'pass@123';

		// this.navCtrl.navigateRoot('/home');
		const formData = {
			usr: this.username,
			pwd: this.password
		};

		// const formData: any = new FormData();
		// formData.append('usr', 'anant.nerkar@gmail.com');
		// formData.append('pwd', 'pass@123');
		// formData.append('usr', this.username);
		// formData.append('pwd', this.password);
		this.storage.remove('UserData');
		this.commonAPIService.showLoader('Signing in...');
		this.commonAPIService.postData('method/login', formData).subscribe((data: any) => {
			console.log('login - success API', data);
			this.commonAPIService.hideLoader();
			this.storage.set('UserData', JSON.stringify(data));
			// this.storage.get('tmp_id').then((val) => {
			// 	console.log('Your user details is', JSON.parse(val));
			// });
			if (data.user_role_profile === 'Customer') {
				// this.navCtrl.navigateRoot('/user-address');
				this.navCtrl.navigateRoot('/tabnav');
			} else {
				this.navCtrl.navigateRoot('/add-shop-details');
			}
		}, err => {
			console.log('API Error', err.error.message);
			this.showToast(err.error.message);
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

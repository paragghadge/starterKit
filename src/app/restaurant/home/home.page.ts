import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CommonApiService } from '../../provider/commonAPI/common-api.service';
import { Storage } from '@ionic/storage';

enum COLORS {
	GREY = '#E0E0E0',
	GREEN = '#76FF03',
	Yellow = '#FFCA28',
	RED = '#DD2C00'
}
@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public filterTab: string;
	public rating: number;
	public isOpen = true;

	constructor(
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		private storage: Storage,
		public commonAPIService: CommonApiService
	) { }

	ngOnInit() {
		this.rating = 4;
		this.getRestaurantData();
	}

	getRestaurantData() {
		this.storage.get('UserData').then((val) => {
			console.log('Your user details is deom home page ', JSON.parse(val));
		});
		console.log('get Data = ');
		// this.commonAPIService.showLoader('Signing in...');
		this.commonAPIService.getData('method/sys_core.sys_core.api.get_item_details_master_data').subscribe((data: any) => {
			console.log('login - success API', data);
			this.commonAPIService.hideLoader();
		}, err => {
			console.log('API Error', err.error.message);
			// this.showToast(err.error.message);
			// this.commonAPIService.hideLoader();
			console.log(err);
			if (err.name === 'TimeoutError') {
				console.log('TimeoutError');
			}
		});
	}

	onClickTabs(tab: any) {
		console.log('tab = ', tab);
		this.filterTab = tab;
	}

	ratingChange(data: any) {
		console.log('emit = ', data);
	}

	onClickNotification() {
		console.log('notifications clicked.');
	}
	onCLickItem() {
		// tabnav/tabnav/dashboard/restaurant-details
		this.navCtrl.navigateForward('/tabnav/tabnav/home/restaurant-details');
	}

	onClickCall(e) {
		e.stopPropagation();
		console.log('hi...!');
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

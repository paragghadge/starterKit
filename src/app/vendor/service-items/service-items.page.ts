import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
	selector: 'app-service-items',
	templateUrl: './service-items.page.html',
	styleUrls: ['./service-items.page.scss'],
})
export class ServiceItemsPage implements OnInit {

	public serviceItems = [];
	public imageName = '';
	constructor(
		public toastCtrl: ToastController,
		public navCtrl: NavController,
	) { }

	ngOnInit() {
	}

	onClickItem(item: any) {
		const index = this.serviceItems.indexOf(item);
		if (index > -1) {
			this.serviceItems.splice(index, 1);
		} else {
			this.imageName = 'Selected-item';
			this.serviceItems.push(item);
		}
	}

	onClickPayment() {
		if (this.serviceItems.length === 0) {
			this.showToast('Please choose any service.');
			return;
		}
		this.navCtrl.navigateForward('/subscription-plan');
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

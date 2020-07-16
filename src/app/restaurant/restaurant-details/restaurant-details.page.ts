import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController, NavController } from '@ionic/angular';
import { ItemsModalPage } from '../modals/items-modal/items-modal.page';

@Component({
	selector: 'app-restaurant-details',
	templateUrl: './restaurant-details.page.html',
	styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

	constructor(
		public modalController: ModalController
	) { }

	ngOnInit() {
	}

	onCickItemCategory(category: any) {
		console.log('category ', category);
		this.openModal();
	}

	async openModal() {
		const modal = await this.modalController.create({
			component: ItemsModalPage,
			componentProps: {
				paramID: 123,
			}
		});

		modal.onDidDismiss().then((dataReturned) => {
			console.log('closed...!');
		});

		return await modal.present();
	}

}

import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-address-modal',
	templateUrl: './address-modal.page.html',
	styleUrls: ['./address-modal.page.scss'],
})

export class AddressModalPage implements OnInit {

	addressData: string;
	modelId: number;

	constructor(
		private modalController: ModalController,
		private navParams: NavParams
	) { }

	ngOnInit() {
		console.table(this.navParams);
		this.modelId = this.navParams.data.paramID;
		this.addressData = this.navParams.data.addressData;
	}

	async closeModal(action: any) {
		const onClosedData = action;
		await this.modalController.dismiss(onClosedData);
	}

}

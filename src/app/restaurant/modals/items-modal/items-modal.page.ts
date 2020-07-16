import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-items-modal',
	templateUrl: './items-modal.page.html',
	styleUrls: ['./items-modal.page.scss'],
})
export class ItemsModalPage implements OnInit {
	public rating = 4;
	count: any = 1;
	totalCartAmount: number;
	public cart = [];
	public menuItems = [{
		name: 'Item 1',
		rating: 4,
		price: 120,
		votes: 20,
		count: 0,
		id: 1
	}, {
		name: 'Item 2',
		rating: 3,
		price: 150,
		votes: 20,
		count: 0,
		id: 2
	}, {
		name: 'Item 3',
		rating: 4,
		price: 170,
		votes: 25,
		count: 0,
		id: 3
	}, {
		name: 'Item 4',
		rating: 4,
		price: 120,
		votes: 20,
		count: 0,
		id: 4
	}];

	constructor(
		private modalController: ModalController,
		private navParams: NavParams
	) { }

	ngOnInit() {
	}

	async closeModal(action: any) {
		const onClosedData = action;
		await this.modalController.dismiss(onClosedData);
	}

	addQuantity(item: any) {
		console.log('item ', item);
		this.menuItems.map((temp) => {
			if (temp.id === item) {
				temp.count = temp.count + 1;
				console.log('count = ', temp.count);
			}
		});
		this.getTotalAmount();
	}

	removeQuantity(item: any) {
		console.log('item ', item);
		this.menuItems.map((temp) => {
			if (temp.id === item && temp.count > 0) {
				temp.count = temp.count - 1;
				console.log('count = ', temp.count);
			}
		});
		this.getTotalAmount();
	}

	getTotalAmount() {
		this.cart = this.menuItems.filter((data) => {
			return data.count > 0;
		});
		console.log('cart Item ', this.cart);
		this.totalCartAmount = this.cart.reduce((acc, item) => acc + (item.count * item.price), 0);
		console.log('cart Item ', this.totalCartAmount);
	}

}

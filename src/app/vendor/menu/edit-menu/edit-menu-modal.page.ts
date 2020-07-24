import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { updateMenu } from '../menu-service';

@Component({
	selector: 'edit-modal',
	templateUrl: './edit-menu-modal.page.html',
	styleUrls: ['../menu-page.scss'],
})

export class EditModalPage implements OnInit {
	menu: object;
	subMenu: any;
	onModalClose:any;

	constructor(
		private modalController: ModalController,
		private navParams: NavParams
	) { }

	ngOnInit() {
		this.subMenu = JSON.parse(JSON.stringify(this.navParams.data.subMenu));
		this.menu = this.navParams.data.menu;
		this.onModalClose = this.navParams.data.onModalClose;
	}

	closeModal = () => {
		this.onModalClose();
		this.modalController.dismiss()
	};

	onClickSave = () => {
		updateMenu(this.menu, this.subMenu);
		this.onModalClose();
		this.modalController.dismiss();
	};
	
	onClickDelete = (item) => {
		console.log('this.subMenu, ', this.subMenu);
		this.subMenu.items = this.subMenu.items.filter(itm => itm.code !== item.code);
		console.log('item, ', item);
	};
}

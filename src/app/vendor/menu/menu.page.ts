import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CommonApiService } from 'src/app/provider/commonAPI/common-api.service';

import { menuTypes, subMenuTypes } from './constants'
import { EditModalPage } from './edit-menu/edit-menu-modal.page';
import { getMenu } from './menu-service';
import { isArray } from 'src/utility/helper';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu-page.scss'],
})
export class MenuPage implements OnInit {
	public menus = menuTypes;
	public subMenus = subMenuTypes;
	editModal = null;
	selectedMenu = '';
	shownGroup = null;
	menu: any = {}
	menuList = [];
	outOfStockItems = 0;

	constructor(
		public navCtrl: NavController,
		public commonAPIService: CommonApiService,
		public modalController: ModalController
	) { }

	ngOnInit() { }

	ionViewDidEnter = () => this.getMenus();

	getMenus = () => {
		this.menuList = getMenu();
		this.selectedMenu = isArray(this.menus) ? this.menus[1] : '';
		this.onMenuSelect(this.selectedMenu);
		this.onMenuSelect(this.menu.name);
	}

	onMenuSelect = menuName => {
		this.menu = { ...this.menuList.find(menu => menu.name === menuName) }
		this.outOfStockItems = this.calculateOutOfStockItems();
	}

	onClickAdd = () => this.navCtrl.navigateForward('/add-menu');

	toggleGroup = group => this.shownGroup = this.isGroupShown(group) ? null : group;

	isGroupShown = group => this.shownGroup === group;

	openModal = async (menu, subMenu) => {
		const modal = await this.modalController.create({
			component: EditModalPage,
			componentProps: { menu, subMenu, onModalClose: this.dismissModal }
		});
		await modal.present();
		this.editModal = modal;
	}

	calculateOutOfStockItems = () => {
		let outOfStockItems = 0;
		this.menu && isArray(this.menu.subMenuType) && this.menu.subMenuType.map(subMenu => {
			isArray(subMenu.items) && subMenu.items.map(item => !item.available && outOfStockItems++)
		})
		return outOfStockItems
	}

	dismissModal = () =>  this.getMenus();
}

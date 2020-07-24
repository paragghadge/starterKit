import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CommonApiService } from 'src/app/provider/commonAPI/common-api.service';

import { menuTypes, subMenuTypes } from '../constants'
import { setMenu } from '../menu-service';

@Component({
	selector: 'app-add-menu',
	templateUrl: './add-menu.page.html',
	styleUrls: ['../menu-page.scss'],
})
export class AddMenuPage implements OnInit {
	public addMenuForm = new FormGroup({
		menuType: new FormControl('', Validators.required),
		subMenuType: new FormControl('', Validators.required),
		name: new FormControl('', Validators.required),
		category: new FormControl('', Validators.required),
		price: new FormControl('', Validators.required),
		available: new FormControl(true)
	});
	public menus = menuTypes;
	public subMenus = subMenuTypes;

	constructor(
		public formBuilder: FormBuilder,
		public navCtrl: NavController,
		public commonAPIService: CommonApiService,
		public modalController: ModalController
	) { }

	ngOnInit() { }

	onClickAdd = () => {
		setMenu({...this.addMenuForm.value, code: Math.floor(Math.random() * 10000)})
		this.navCtrl.navigateForward('/menu');
	}
}

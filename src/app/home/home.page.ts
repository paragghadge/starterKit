import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(
		public toastCtrl: ToastController,
		public navCtrl: NavController,
	) { }

	logout() {
		this.navCtrl.navigateRoot('/login');
	}

}

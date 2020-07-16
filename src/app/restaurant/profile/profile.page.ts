import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	constructor(
		public toastCtrl: ToastController,
		public navCtrl: NavController,
	) { }

	ngOnInit() {
	}

	logout() {
		this.navCtrl.navigateRoot('/login');
	}

}

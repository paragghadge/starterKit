import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	constructor(
		public toastCtrl: ToastController,
		public navCtrl: NavController,
		private storage: Storage,
		public alertController: AlertController
	) { }

	ngOnInit() {
	}

	onClickItems(goto: any) {
		this.navCtrl.navigateForward(goto);
	}

	logout() {
		this.presentLogoutConfirm();
	}

	async presentLogoutConfirm() {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Logout',
			message: 'Do you really want to logout?',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
					}
				}, {
					text: 'Yes',
					handler: () => {
						console.log('Confirm Cancel: blah');
						localStorage.clear();
						this.storage.clear();
						this.navCtrl.navigateRoot('/login');
					}
				}
			]
		});

		await alert.present();
	}

}

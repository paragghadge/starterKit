import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-tabnav',
	templateUrl: './tabnav.page.html',
	styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {

	userData: any;
	currentTab = [];

	customerTab = [{
		displayName: 'Home',
		url: 'home',
		icon: 'home'
	}, {
		displayName: 'Dashboard',
		url: 'dashboard',
		icon: 'grid-outline'
	}, {
		displayName: 'Chat',
		url: 'paymenthistory',
		icon: 'chatbubble-outline'
	}, {
		displayName: 'Profile',
		url: 'profile',
		icon: 'people'
	}];

	vandorTab = [{
		displayName: 'Dashboard',
		url: 'vendor/dashboard',
		icon: 'grid-outline'
	}, {
		displayName: 'My Orders',
		url: 'vendor/orders',
		icon: 'document-text-outline'
	}, {
		displayName: 'Chat',
		url: 'paymenthistory',
		icon: 'chatbubble-outline'
	}, {
		displayName: 'Profile',
		url: 'profile',
		icon: 'people'
	}];

	constructor(
		private storage: Storage,
	) {
		this.storage.get('UserData').then((val) => {
			console.log('Your user details is', JSON.parse(val));
			this.userData = JSON.parse(val);
			this.currentTab = this.userData.user_role_profile === 'Customer' ? this.customerTab : this.vandorTab;
		});
	}

	ngOnInit() {
	}

}

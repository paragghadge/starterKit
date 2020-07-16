import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

enum COLORS {
	GREY = '#E0E0E0',
	GREEN = '#76FF03',
	Yellow = '#FFCA28',
	RED = '#DD2C00'
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	public filterTab: string;
	public rating: number;
	public isOpen = true;

	constructor(
		public navCtrl: NavController,
	) { }

	ngOnInit() {
		this.rating = 4;
	}

	onClickTabs(tab: any) {
		console.log('tab = ', tab);
		this.filterTab = tab;
	}

	ratingChange(data: any) {
		console.log('emit = ', data);
	}

	onClickNotification() {
		console.log('notifications clicked.');
	}
	onCLickItem() {
		this.navCtrl.navigateForward('/tabnav/tabnav/dashboard/restaurant-details');
	}

	onClickCall(e) {
		e.stopPropagation();
		console.log('hi...!');
	}
}

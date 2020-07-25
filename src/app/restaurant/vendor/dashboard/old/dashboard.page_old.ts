import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	preparationTime = 10;
	constructor() { }

	ngOnInit() {
	}

	removeTime() {
		if (this.preparationTime > 1) {
			this.preparationTime = this.preparationTime - 1;
		}
	}

	addTime() {
		this.preparationTime = this.preparationTime + 1;
	}

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { RatingComponent } from 'src/app/common/rating/rating.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DashboardPageRoutingModule
	],
	declarations: [DashboardPage, RatingComponent],
	entryComponents: []
})
export class DashboardPageModule { }

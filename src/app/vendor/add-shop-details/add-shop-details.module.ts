import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShopDetailsPageRoutingModule } from './add-shop-details-routing.module';

import { AddShopDetailsPage } from './add-shop-details.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AddShopDetailsPageRoutingModule
	],
	declarations: [AddShopDetailsPage]
})
export class AddShopDetailsPageModule { }

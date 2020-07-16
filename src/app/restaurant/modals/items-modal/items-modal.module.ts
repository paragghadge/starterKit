import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsModalPageRoutingModule } from './items-modal-routing.module';

import { ItemsModalPage } from './items-modal.page';
import { RatingComponent } from 'src/app/common/rating/rating.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ItemsModalPageRoutingModule
	],
	declarations: [ItemsModalPage, RatingComponent]
})
export class ItemsModalPageModule { }

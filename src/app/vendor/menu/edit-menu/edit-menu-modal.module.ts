import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMenuModalRoutingModule } from './edit-menu-modal-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		EditMenuModalRoutingModule
	],
	declarations: []
})
export class EditMenuModalPageModule { }

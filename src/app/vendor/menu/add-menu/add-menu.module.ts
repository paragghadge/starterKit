import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMenuRoutingModule } from './add-menu-routing.module';

import { AddMenuPage } from './add-menu.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AddMenuRoutingModule
	],
	declarations: [AddMenuPage]
})
export class AddMenuPageModule { }

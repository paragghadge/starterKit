import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		MenuRoutingModule
	],
	declarations: [MenuPage]
})
export class MenuPageModule { }

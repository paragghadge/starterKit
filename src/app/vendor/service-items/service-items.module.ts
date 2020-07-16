import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceItemsPageRoutingModule } from './service-items-routing.module';

import { ServiceItemsPage } from './service-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceItemsPageRoutingModule
  ],
  declarations: [ServiceItemsPage]
})
export class ServiceItemsPageModule {}

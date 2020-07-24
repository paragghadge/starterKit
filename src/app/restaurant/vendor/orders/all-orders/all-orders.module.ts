import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AllOrdersPageRoutingModule } from './all-orders-routing.module';
import { AllOrdersPage } from './all-orders.page';
import { OrderCard } from '../order-card/order-card.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOrdersPageRoutingModule
  ],
  declarations: [AllOrdersPage, OrderCard]
})
export class AllOrdersPageModule {}

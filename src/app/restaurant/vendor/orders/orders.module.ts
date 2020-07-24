import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';
import { OrdersPage } from './orders.page';
import { OrderCard } from './order-card/order-card.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule
  ],
  declarations: [OrdersPage, OrderCard]
})
export class OrdersPageModule {}

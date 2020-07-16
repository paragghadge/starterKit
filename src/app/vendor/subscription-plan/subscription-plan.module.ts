import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionPlanPageRoutingModule } from './subscription-plan-routing.module';

import { SubscriptionPlanPage } from './subscription-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPlanPageRoutingModule
  ],
  declarations: [SubscriptionPlanPage]
})
export class SubscriptionPlanPageModule {}

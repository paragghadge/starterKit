import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionPlanPage } from './subscription-plan.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionPlanPageRoutingModule {}

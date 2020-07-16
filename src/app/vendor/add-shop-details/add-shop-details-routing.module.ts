import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShopDetailsPage } from './add-shop-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddShopDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShopDetailsPageRoutingModule {}

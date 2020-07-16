import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceItemsPage } from './service-items.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceItemsPageRoutingModule {}

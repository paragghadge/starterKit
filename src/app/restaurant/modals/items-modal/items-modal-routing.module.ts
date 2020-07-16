import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsModalPage } from './items-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsModalPageRoutingModule {}

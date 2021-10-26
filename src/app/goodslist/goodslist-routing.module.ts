import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodslistPage } from './goodslist.page';

const routes: Routes = [
  {
    path: '',
    component: GoodslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodslistPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombodetailPage } from './combodetail.page';

const routes: Routes = [
  {
    path: '',
    component: CombodetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombodetailPageRoutingModule {}

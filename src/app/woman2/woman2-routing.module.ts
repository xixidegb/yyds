import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Woman2Page } from './woman2.page';

const routes: Routes = [
  {
    path: '',
    component: Woman2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Woman2PageRoutingModule {}

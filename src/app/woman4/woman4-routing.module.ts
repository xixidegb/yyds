import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Woman4Page } from './woman4.page';

const routes: Routes = [
  {
    path: '',
    component: Woman4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Woman4PageRoutingModule {}

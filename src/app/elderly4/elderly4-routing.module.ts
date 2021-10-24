import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Elderly4Page } from './elderly4.page';

const routes: Routes = [
  {
    path: '',
    component: Elderly4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Elderly4PageRoutingModule {}

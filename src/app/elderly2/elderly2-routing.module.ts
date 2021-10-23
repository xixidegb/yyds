import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Elderly2Page } from './elderly2.page';

const routes: Routes = [
  {
    path: '',
    component: Elderly2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Elderly2PageRoutingModule {}

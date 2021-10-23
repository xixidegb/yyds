import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Elderly1Page } from './elderly1.page';

const routes: Routes = [
  {
    path: '',
    component: Elderly1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Elderly1PageRoutingModule {}

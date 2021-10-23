import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Elderly3Page } from './elderly3.page';

const routes: Routes = [
  {
    path: '',
    component: Elderly3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Elderly3PageRoutingModule {}

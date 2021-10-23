import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Man2Page } from './man2.page';

const routes: Routes = [
  {
    path: '',
    component: Man2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Man2PageRoutingModule {}

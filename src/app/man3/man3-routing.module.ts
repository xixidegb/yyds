import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Man3Page } from './man3.page';

const routes: Routes = [
  {
    path: '',
    component: Man3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Man3PageRoutingModule {}

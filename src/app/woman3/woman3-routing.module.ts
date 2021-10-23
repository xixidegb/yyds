import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Woman3Page } from './woman3.page';

const routes: Routes = [
  {
    path: '',
    component: Woman3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Woman3PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Woman1Page } from './woman1.page';

const routes: Routes = [
  {
    path: '',
    component: Woman1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Woman1PageRoutingModule {}

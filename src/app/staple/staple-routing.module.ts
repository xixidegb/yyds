import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaplePage } from './staple.page';

const routes: Routes = [
  {
    path: '',
    component: StaplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaplePageRoutingModule {}

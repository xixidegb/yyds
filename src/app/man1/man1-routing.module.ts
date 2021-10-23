import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Man1Page } from './man1.page';

const routes: Routes = [
  {
    path: '',
    component: Man1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Man1PageRoutingModule {}

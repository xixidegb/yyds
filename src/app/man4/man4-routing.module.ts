import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Man4Page } from './man4.page';

const routes: Routes = [
  {
    path: '',
    component: Man4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Man4PageRoutingModule {}

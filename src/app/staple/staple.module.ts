import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaplePageRoutingModule } from './staple-routing.module';

import { StaplePage } from './staple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaplePageRoutingModule
  ],
  declarations: [StaplePage]
})
export class StaplePageModule {}

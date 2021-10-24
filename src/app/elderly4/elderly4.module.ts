import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Elderly4PageRoutingModule } from './elderly4-routing.module';

import { Elderly4Page } from './elderly4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Elderly4PageRoutingModule
  ],
  declarations: [Elderly4Page]
})
export class Elderly4PageModule {}

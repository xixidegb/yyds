import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Elderly2PageRoutingModule } from './elderly2-routing.module';

import { Elderly2Page } from './elderly2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Elderly2PageRoutingModule
  ],
  declarations: [Elderly2Page]
})
export class Elderly2PageModule {}

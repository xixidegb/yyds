import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Elderly1PageRoutingModule } from './elderly1-routing.module';

import { Elderly1Page } from './elderly1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Elderly1PageRoutingModule
  ],
  declarations: [Elderly1Page]
})
export class Elderly1PageModule {}

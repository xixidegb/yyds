import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Woman2PageRoutingModule } from './woman2-routing.module';

import { Woman2Page } from './woman2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Woman2PageRoutingModule
  ],
  declarations: [Woman2Page]
})
export class Woman2PageModule {}

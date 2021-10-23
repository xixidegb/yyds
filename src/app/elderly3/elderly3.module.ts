import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Elderly3PageRoutingModule } from './elderly3-routing.module';

import { Elderly3Page } from './elderly3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Elderly3PageRoutingModule
  ],
  declarations: [Elderly3Page]
})
export class Elderly3PageModule {}

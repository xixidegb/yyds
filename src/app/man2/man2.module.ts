import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Man2PageRoutingModule } from './man2-routing.module';

import { Man2Page } from './man2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Man2PageRoutingModule
  ],
  declarations: [Man2Page]
})
export class Man2PageModule {}

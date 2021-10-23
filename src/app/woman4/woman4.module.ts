import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Woman4PageRoutingModule } from './woman4-routing.module';

import { Woman4Page } from './woman4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Woman4PageRoutingModule
  ],
  declarations: [Woman4Page]
})
export class Woman4PageModule {}

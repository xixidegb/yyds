import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombodetailPageRoutingModule } from './combodetail-routing.module';

import { CombodetailPage } from './combodetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombodetailPageRoutingModule
  ],
  declarations: [CombodetailPage]
})
export class CombodetailPageModule {}

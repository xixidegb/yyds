import { GoodsComponent } from './goods.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [GoodsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }

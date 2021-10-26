import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodslistPageRoutingModule } from './goodslist-routing.module';

import { GoodslistPage } from './goodslist.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodslistPageRoutingModule
  ],
  declarations: [GoodslistPage]
})
export class GoodslistPageModule {}

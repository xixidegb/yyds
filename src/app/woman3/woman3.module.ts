import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Woman3PageRoutingModule } from './woman3-routing.module';

import { Woman3Page } from './woman3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Woman3PageRoutingModule
  ],
  declarations: [Woman3Page]
})
export class Woman3PageModule {}

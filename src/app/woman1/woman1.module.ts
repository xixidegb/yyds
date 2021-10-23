import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Woman1PageRoutingModule } from './woman1-routing.module';

import { Woman1Page } from './woman1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Woman1PageRoutingModule
  ],
  declarations: [Woman1Page]
})
export class Woman1PageModule {}

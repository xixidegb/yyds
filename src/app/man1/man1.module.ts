import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Man1PageRoutingModule } from './man1-routing.module';

import { Man1Page } from './man1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Man1PageRoutingModule
  ],
  declarations: [Man1Page]
})
export class Man1PageModule {}

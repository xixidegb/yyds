import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Man3PageRoutingModule } from './man3-routing.module';

import { Man3Page } from './man3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Man3PageRoutingModule
  ],
  declarations: [Man3Page]
})
export class Man3PageModule {}

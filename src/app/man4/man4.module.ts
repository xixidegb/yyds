import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Man4PageRoutingModule } from './man4-routing.module';

import { Man4Page } from './man4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Man4PageRoutingModule
  ],
  declarations: [Man4Page]
})
export class Man4PageModule {}

import { Tab5Component } from './tab5.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5RoutingModule } from './tab5-routing.module';


@NgModule({
  declarations: [Tab5Component],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab5Component }]),
    Tab5RoutingModule
  ]
})
export class Tab5Module { }

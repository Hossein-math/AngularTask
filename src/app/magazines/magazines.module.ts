import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazinesComponent } from './magazines/magazines.component';
import {MagazinesRoutingModule} from "./magazines.routing";



@NgModule({
  declarations: [
    MagazinesComponent
  ],
  imports: [
    CommonModule,
    MagazinesRoutingModule
  ]
})
export class MagazinesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePostComponent } from './single-post/single-post.component';
import {SinglePostRoutingModule} from "./single-post.routing";


@NgModule({
  declarations: [
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    SinglePostRoutingModule
  ]
})
export class SinglePostModule { }

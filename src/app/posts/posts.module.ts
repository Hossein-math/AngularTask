import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsComponent} from './posts/posts.component';
import {PostsRoutingModule} from "./posts.routing";


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule {
}

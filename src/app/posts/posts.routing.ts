import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {PostsComponent} from "./posts/posts.component";


const routes: Routes = [
  {path: 'all', component: PostsComponent},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PostsRoutingModule {}

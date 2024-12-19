import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {SinglePostComponent} from "./single-post/single-post.component";


const routes: Routes = [
  {path: ':post_slug', component: SinglePostComponent},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SinglePostRoutingModule {}

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MagazinesComponent} from "./magazines/magazines.component";


const routes: Routes = [
  {path: 'all', component: MagazinesComponent},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MagazinesRoutingModule {}

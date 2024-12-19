import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoadingPageRoutingModule } from './landing-page.routing';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LoadingPageRoutingModule
  ]
})
export class LandingPageModule { }

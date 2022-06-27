import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AngularTypewriterEffectModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

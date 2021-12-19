import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    AppMaterialModule
  ]
})

export class VideosModule { }

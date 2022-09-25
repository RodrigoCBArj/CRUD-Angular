import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos/videos.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VideosComponent,
    VideoFormComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class VideosModule { }

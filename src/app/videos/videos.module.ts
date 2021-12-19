import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatTableModule
  ]
})
export class VideosModule { }

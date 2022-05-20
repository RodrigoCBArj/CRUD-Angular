import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoFormComponent } from './video-form/video-form.component';

import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: VideosComponent },
  { path: 'new', component: VideoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }

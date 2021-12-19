import { VideosService } from './../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})

export class VideosComponent implements OnInit {

  videos: Observable<Video[]>;
  displayedColumns = ['name', 'category'];

  constructor(private videosService: VideosService) {
    this.videos = this.videosService.listAll();
  }

  ngOnInit(): void { }

}

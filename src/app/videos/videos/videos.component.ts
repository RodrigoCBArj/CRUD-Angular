import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Video[] = [
    { _id: '1', name: 'Tiringa e a naja assassina', category: 'Coméria' },
    { _id: '2', name: 'Tiringa e a cobra assassina', category: 'Natureza' }
  ];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}

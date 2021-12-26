import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../model/video';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  private readonly API = 'api/videos';

  constructor(private HttpClient: HttpClient) { }

  listAll() {
    return this.HttpClient.get<Video[]>(this.API)
    .pipe(
      first(), // recebe apenas a primeira resposta do servidor e finaliza a comunicação
      delay(1000),
      tap(courses => console.log(courses))
    );
  }
}

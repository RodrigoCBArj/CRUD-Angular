import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Video } from '../model/video';
import { VideosService } from './../services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos$: Observable<Video[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private VideosService: VideosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.videos$ = this.VideosService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar vídeos.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

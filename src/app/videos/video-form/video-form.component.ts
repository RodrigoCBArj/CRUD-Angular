import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss']
})
export class VideoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: VideosService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
    }

    onBack() {
      this.location.back();
    }

    private onError() {
      this.snackBar.open('Erro ao salvar vídeo!', '', { duration: 5000 });
    }

    private onSuccess() {
      this.snackBar.open('Vídeo salvo com sucesso!', '', { duration: 5000 });
      this.onBack();
  }
}

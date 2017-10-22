import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media/media.service';
import Media from '../media/media';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app';
  movies: Media[] = [];

  constructor(private mediaService: MediaService) {

  }

  ngOnInit() {
    this.movies = this.mediaService.list('movie');
  }
}

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
  tvShow: Media[] = [];

  constructor(private mediaService: MediaService) {

  }

  ngOnInit() {
    this.mediaService.list('movie')
      .then(data => this.movies = data)
      .catch(err => console.log(err));

    this.mediaService.list('tv-show')
      .then(data => this.tvShow = data)
      .catch(err => console.log(err));
  }
}

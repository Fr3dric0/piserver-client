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
    this.mediaService.list()
      .then(data => this.movies = data.filter(m => m.type === 'movie'))
      .catch(err => console.log(err));
  }
}

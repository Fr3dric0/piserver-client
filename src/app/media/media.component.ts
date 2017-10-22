import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';
import Media from './media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: []
})
export class MediaComponent implements OnInit {
  title = 'Movies';
  media: Media[] = [];

  constructor(private ms: MediaService) {}

  ngOnInit() {
    this.ms.list()
      .then(data => this.media = data)
      .catch(err => console.log(err));
  }
}

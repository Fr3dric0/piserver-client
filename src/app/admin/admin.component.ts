
import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media/media.service';
import Media from '../media/media';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  media: Media[] = [];

  constructor(private ms: MediaService) {}

  ngOnInit() {
    this.ms.list()
      .then(data => this.media = data)
      .catch(err => console.error(err));
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

import { MediaService } from '../media.service';
import { ActivatedRoute } from '@angular/router';
import Media from '../media';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.scss']
})
export class MediaDetailComponent implements OnInit, OnDestroy {
  id: number;
  media: Media;

  private sub: any;

  constructor(private mediaService: MediaService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.mediaService.retrieve(this.id)
        .then(data => this.media = data)
        .catch(err => console.log(err));

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

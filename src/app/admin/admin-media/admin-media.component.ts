import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaService } from '../../media/media.service';
import Media from '../../media/media';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-media',
  templateUrl: './admin-media.component.html'
})
export class AdminMediaComponent implements OnInit, OnDestroy {

  id = -1;
  media: Media = null;
  sub: any;

  constructor(private ms: MediaService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.ms.retrieve(this.id)
        .then(data => this.media = data)
        .catch(err => console.log(err));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

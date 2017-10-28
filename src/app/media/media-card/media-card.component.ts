import { Component, Input } from '@angular/core';
import Media from '../media';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent {
  private _url: string;

  @Input('media') media: Media;

  @Input('url')
  set url(url: string) {
    this._url = url;
  }

  get url(): string {
    return this._url;
  }

}

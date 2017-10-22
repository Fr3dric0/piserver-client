import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent {

  private _title: string;
  private _description: string;
  private _thumbnail: string;
  private _url: string;

  @Input('title')
  set title(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  @Input('thumbnail')
  set thumbnail(thumbnail: string) {
    this._thumbnail = thumbnail;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

  @Input('url')
  set url(url: string) {
    this._url = url;
  }

  get url(): string {
    return this._url;
  }

}

import { Injectable } from '@angular/core';
import Media from './media';
import { Http } from '@angular/http';

@Injectable()
export class MediaService {

  constructor(private http: Http) {
  }

  list(type = null): Promise<Media[]> {
    return this.http.get(`/api/v1/media/${type ? '?type=' + type : ''}`)
      .toPromise()
      .then(res => res.json() as Media[]);
  }

  retrieve(id: number): Promise<Media> {
    return this.http.get(`/api/v1/media/${id}/`)
      .toPromise()
      .then(res => res.json() as Media);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CrudService<T> {

  private baseUrl = '/api/v1/';

  constructor(protected http: Http) {

  }

  list(): Promise<T[]> {
    return this.buildRequest(this.http.get, `${this.baseUrl}`)
      .then(res => res.json() as T[]);
  }

  retrieve(id: number | string): Promise<T> {
    return this.http.get(`${this.baseUrl}${id}/`)
      .toPromise()
      .then(res => res.json());
  }

  create(body: T): Promise<T> {
    return this.http.post(`${this.baseUrl}`, JSON.stringify(body))
      .toPromise()
      .then(res => res.json() as T);
  }

  update(id: number | string, body: T): Promise<T> {
    return this.http.put(`${this.baseUrl}${id}/`, JSON.stringify(body))
      .toPromise()
      .then(res => res.json() as T);
  }

  destroy(id: number | string): Promise<T | any> {
    return this.http.delete(`${this.baseUrl}${id}/`)
      .toPromise()
      .then(res => res.json());
  }

  buildRequest(method, url: string, body: T = null, headers: Headers = new Headers()): any {
    return method(url, body ? JSON.stringify(body) : null, {headers})
      .toPromise();
  }

  protected setBaseUrl(url) {
    if (!url.startsWith('/') && !url.startsWith('http')) {
      this.baseUrl = `/${url}`;
    }

    if (!this.baseUrl.endsWith('/')) {
      this.baseUrl = `${this.baseUrl}/`;
    }
  }

  protected getBaseUrl() {
    return this.baseUrl;
  }
}
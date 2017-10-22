import { Injectable } from '@angular/core';
import Media from './media';

const movies = [
  new Media(1, 'Batman v. Superman', null, 'movie', '/assets/batman_v_superman.jpg'),
  new Media(2, 'The Dark Knight', null, 'movie', '/assets/the_dark_knight.jpeg'),
  new Media(3, 'The Dark Knight Rises', null, 'movie', '/assets/the_dark_knight_rises.jpg')
];

@Injectable()
export class MediaService {

  list(type = null): Media[] {

    if (type === 'movie') {
      return movies;
    } else {
      return null;
    }
  }

  retrieve(id: number): Media {
    return movies[id - 1];
  }
}

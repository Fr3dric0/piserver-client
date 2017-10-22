
export default class Media {
  id?: number = -1;
  title: string;
  subtitle?: string;
  type: string;
  thumbnail?: string;
  cover?: string;
  url?: string;
  seasons?: any;

  constructor(id: number, title: string, subtitle: string, type: string, thumbnail: string = null, cover: string = null) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.type = type;
    this.thumbnail = thumbnail;
    this.cover = cover;
  }
}

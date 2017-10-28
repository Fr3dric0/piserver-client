import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Media from '../../media/media';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html'
})
export class MediaFormComponent implements OnInit {

  mediaForm: FormGroup;

  private _media: Media;

  @Input('media')
  set media(media: Media) {
    this._media = media;
  }

  get media(): Media {
    return this._media;
  }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    let config = {
      title: ['', Validators.required],
      subtitle: [''],
      type: ['', Validators.required],
      rating: [0.0, Validators.required],
      description: ['']
    };

    // Inject media values
    if (this.media) {
      config = {
        title: [this.media.title, Validators.required],
        subtitle: [this.media.subtitle || ''],
        type: [this.media.type, Validators.required],
        rating: [this.media.rating || 0.0, Validators.required],
        description: [this.media.description || '']
      };
    }

    this.mediaForm = this.fb.group(config);
  }
}


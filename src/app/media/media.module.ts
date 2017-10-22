import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { RouterModule } from '@angular/router';
import { MediaService } from './media.service';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MediaComponent, MediaCardComponent, MediaDetailComponent],
  exports: [MediaComponent, MediaCardComponent, MediaDetailComponent],
  providers: [MediaService]
})
export class MediaModule {}

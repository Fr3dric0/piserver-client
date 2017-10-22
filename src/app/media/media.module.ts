import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { RouterModule } from '@angular/router';
import { MediaService } from './media.service';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [CommonModule, HttpModule, SharedModule, RouterModule],
  declarations: [MediaComponent, MediaCardComponent, MediaDetailComponent],
  exports: [MediaComponent, MediaCardComponent, MediaDetailComponent],
  providers: [MediaService]
})
export class MediaModule {}

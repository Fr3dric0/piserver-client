
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '../media/media.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminMediaComponent } from './admin-media/admin-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaFormComponent } from './media-form/media-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MediaModule],
  declarations: [AdminComponent, AdminMediaComponent, MediaFormComponent],
  exports: [AdminComponent, AdminMediaComponent, MediaFormComponent]
})
export class AdminModule {}

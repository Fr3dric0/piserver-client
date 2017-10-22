import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MediaModule } from '../media/media.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MediaModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}

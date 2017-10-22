import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { MediaDetailComponent } from './media/media-detail/media-detail.component';

export const routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'media', component: MediaComponent, pathMatch: 'full'},
  {path: 'media/:id', component: MediaDetailComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

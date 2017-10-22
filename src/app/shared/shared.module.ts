
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CrudService } from './crud.service';

@NgModule({
  imports: [HttpModule],
  declarations: [],
  providers: [CrudService],
  exports: []
})
export class SharedModule {}
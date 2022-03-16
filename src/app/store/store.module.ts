import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { InstructorsState } from './state';

@NgModule({
  imports: [
    NgxsModule.forRoot([InstructorsState], {
      developmentMode: !environment.production
    })
  ]
})
export class StoreModule {}
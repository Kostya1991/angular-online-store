import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { UiImageModule } from './../../uikit/image/image.module';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,

    NotFoundRoutingModule,
    UiImageModule,
  ],
})
export class NotFoundModule { }

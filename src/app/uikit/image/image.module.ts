import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageComponent } from './image.component';

@NgModule({
  declarations: [
    ImageComponent,
  ],
  exports: [
    ImageComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class UiImageModule {}

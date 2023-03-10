import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LySliderModule } from '@alyle/ui/slider';
import { ImgCropperComponent } from './img-cropper.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LyImageCropperModule,
    LySliderModule,
    LyButtonModule,
    LyIconModule
  ],
  exports: [ImgCropperComponent],
  declarations: [ImgCropperComponent]
})
export class ImgCropperModule { }

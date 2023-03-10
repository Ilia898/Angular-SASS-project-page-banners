import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorDialog } from './editor-dialog';

import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { FormsModule } from '@angular/forms';
import { LySliderModule } from '@alyle/ui/slider';
import { LyDialogModule } from '@alyle/ui/dialog';
import {EditorComponent} from './editor.component';





@NgModule({
  imports: [
    CommonModule,
    LyImageCropperModule,
    LyButtonModule,
    LyIconModule,
    FormsModule,
    LySliderModule,
    LyDialogModule
  ],
  declarations:[EditorComponent, EditorDialog],
  exports: [EditorComponent]
})
export class MycropperModule { }

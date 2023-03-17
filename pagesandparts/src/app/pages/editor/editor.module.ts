import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { TestComponent } from './cropper/cropper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [EditorComponent, TestComponent],
  exports: [EditorComponent]
})
export class EditorModule { }

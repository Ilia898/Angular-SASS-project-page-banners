import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorSmComponent } from './editor-sm.component';
import { TestComponent } from './cropper/cropper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [TestComponent, EditorSmComponent],
  exports: [EditorSmComponent]
})
export class EditorSmModule { }

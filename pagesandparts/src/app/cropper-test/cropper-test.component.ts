import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cropper-test',
  templateUrl: './cropper-test.component.html',
  styleUrls: ['./cropper-test.component.scss']
})
export class CropperTestComponent implements OnInit {



  ngOnInit() {
  }
  @ViewChild('imageContainer', { static: true }) imageContainer!: ElementRef;
  @ViewChild('image', { static: true }) image!: ElementRef;
  @ViewChild('cropArea', { static: true }) cropArea!: ElementRef;
  @ViewChild('preview', { static: true }) preview!: ElementRef;

  imageSrc = '';
  imageWidth = 0;
  imageHeight = 0;
  cropWidth = 100;
  cropHeight = 100;
  cropLeft = 0;
  cropTop = 0;
  previewWidth = 100;
  previewHeight = 100;



  ngAfterViewInit() {
    this.imageWidth = this.imageContainer.nativeElement.offsetWidth;
    this.imageHeight = this.imageContainer.nativeElement.offsetHeight;
    this.cropArea.nativeElement.style.width = this.cropWidth + 'px';
    this.cropArea.nativeElement.style.height = this.cropHeight + 'px';
    this.previewWidth = this.preview.nativeElement.offsetWidth;
    this.previewHeight = this.preview.nativeElement.offsetHeight;
  }

  cropImage() {
    const context = this.preview.nativeElement.getContext
}
}

import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef,} from '@angular/core';
import { ImgCropperEvent } from '@alyle/ui/image-cropper';
import { LyDialog } from '@alyle/ui/dialog';
import { EditorDialog } from './editor-dialog';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnInit  {
  cropped?: string;

  constructor(
    // private _dialog: LyDialog,
    private _cd: ChangeDetectorRef
  ) { }

  openCropperDialog(event: Event) {
    // this.cropped = null!;
    // this._dialog.open<EditorDialog, Event>(EditorDialog, {
    //   data: event,
    //   width: 320,
    //   disableClose: true
    // }).afterClosed.subscribe((result?: ImgCropperEvent) => {
    //   if (result) {
    //     this.cropped = result.dataURL;
    //     this._cd.markForCheck();
    //   }
    // });
  }

  closeCroppedImage(){
    this.cropped = '';
  }

  ngOnInit() {
 }
}


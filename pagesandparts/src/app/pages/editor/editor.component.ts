import { Component, OnInit } from '@angular/core';
import pagesBlock from '../../Json/editor.json';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  pagesBlock = pagesBlock.pagesBlock;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import pagesBlock from '../../Json/editor.json';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  pagesBlock = pagesBlock.pagesBlock;
  pageHidden = 0;
  btnLeft = faChevronLeft;
  btnRight = faChevronRight;

  pageNumber = pagesBlock.pageNumber;

  constructor() { }

  ngOnInit() {
  }


  setActiveButton(index: number): void {
    this.pageHidden = index;
  }

  endPage(){
    this.pageHidden = 27;
  }

  startPage(){
    this.pageHidden = 0;
  }

  btnEventLeft(){
    this.pageHidden -= 1;
  }

  btnEventRight(){
    this.pageHidden += 1;
  }

test(){
  console.log(this.pagesBlock[0], this.pageNumber[27])
}


}

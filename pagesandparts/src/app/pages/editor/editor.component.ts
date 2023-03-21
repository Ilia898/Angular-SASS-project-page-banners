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
  totalPage = 27;
  viewPage = 10 - 1;
  startPageNumber = this.pageHidden;
  endPageNumber = this.startPageNumber + this.viewPage;
  btnLeft = faChevronLeft;
  btnRight = faChevronRight;

  pageNumber = pagesBlock.pageNumber;

  constructor() { }

  ngOnInit() {
  }


  setActiveButton(index: number): void {
    this.pageHidden = index;

    if(this.pageHidden >= 0 && this.pageHidden <= this.totalPage - this.viewPage){
      this.startPageNumber = this.pageHidden;
      this.endPageNumber = this.startPageNumber + this.viewPage;
    }else if(this.totalPage - this.viewPage <= this.pageHidden){
      this.startPageNumber = this.totalPage - this.viewPage;
      this.endPageNumber = this.totalPage;
    }
  }

  btnEventArrow(pageN: number){
    if(pageN >= 0 && pageN <= 27){
      this.pageHidden = pageN;
      this.setActiveButton(pageN);
    }
  }

test(){
  console.log(this.pagesBlock[0], this.pageNumber[17])
}


}

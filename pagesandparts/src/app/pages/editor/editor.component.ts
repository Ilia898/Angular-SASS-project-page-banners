import { Component, OnInit } from '@angular/core';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Action } from 'rxjs/internal/scheduler/Action';
import pagesBlock from '../../Json/editor.json';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {

  pagesBlock = pagesBlock.pagesBlock;
  pageHidden = 0;
  n = 0;
  // totalPage = 27;
  // viewPage = 10 - 1;
  // startPageNumber = this.pageHidden;
  // endPageNumber = this.startPageNumber + this.viewPage;
  btnLeft = faChevronLeft;
  btnRight = faChevronRight;

  pageNumber = pagesBlock.pageNumber;
  slides = document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>;


  constructor() { }

  ngOnInit() {
  }


  setActiveButton(index: number){
    this.n = index;
    if(index == this.pagesBlock[index].id){
      this.slides[this.n].style.display = 'block';
    }


  console.log(index, this.pagesBlock[this.n].id)

  }


  // setActiveButton(index: number): void {
  //   this.pageHidden = index;

  //   if(this.pageHidden >= 0 && this.pageHidden <= this.totalPage - this.viewPage){
  //     this.startPageNumber = this.pageHidden;
  //     this.endPageNumber = this.startPageNumber + this.viewPage;
  //   }else if(this.totalPage - this.viewPage <= this.pageHidden){
  //     this.startPageNumber = this.totalPage - this.viewPage;
  //     this.endPageNumber = this.totalPage;
  //   }
  // }

  btnEventArrow(pageN: number){
    this.pageHidden = pageN;
    if(pageN >= 0 && pageN <= 27){

      // this.setActiveButton(pageN);
    }
  }

test(){
  this.slides[1].style.display = 'block';
  this.slides[0].style.display = 'none';
  console.log(this.slides)

}

}

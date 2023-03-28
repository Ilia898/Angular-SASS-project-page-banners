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
    this.showSlides(0);
  }

  btnEventArrow(pageN: number){
    this.pageHidden = pageN;
    this.showSlides(pageN);

    console.log(pageN)
  }


  setActiveButton(index: number){
    this.showSlides(index);
    this.pageHidden = index;
  }

  showSlides(n: any){
    var i;
    if(n > this.slides.length || n < 0){n = 0; this.pageHidden = 0}
    for(i = 0; i < this.slides.length; i++){
      this.slides[i].style.display = 'none';
    }
    this.slides[n].style.display = 'block';
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



}

import { Component, OnInit, AfterViewInit} from '@angular/core';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import pagesBlock from '../../Json/editor-sm.json';

@Component({
  selector: 'app-editor-sm',
  templateUrl: './editor-sm.component.html',
  styleUrls: ['./editor-sm.component.scss']
})

export class EditorSmComponent implements OnInit, AfterViewInit{

  pagesBlock = pagesBlock.pagesBlock;
  pageHidden = 0;
  n = 0;
  btnLeft = faChevronLeft;
  btnRight = faChevronRight;

  pageNumber = pagesBlock.pageNumber;
  slides!: HTMLCollectionOf<HTMLElement>;


  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.slides = document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>;
    this.showSlides(0);

  }

  btnEventArrow(pageN: number){
    this.pageHidden = pageN;
    this.showSlides(pageN);

    console.log(pageN, this.slides.length)
  }


  setActiveButton(index: number){
    this.showSlides(index);
    this.pageHidden = index;

    console.log(index)
  }

  showSlides(n: any){
    var i;
    var leng = this.slides.length -1;

    if (n > leng) {
      n = 0;
      this.pageHidden = 0;
    }

    if (n < 0) {
      n = leng;
      this.pageHidden = leng;
    }

    for(i = 0; i < this.slides.length; i++){

      this.slides[i].style.display = 'none';
    }

    this.slides[n].style.display = 'block';
  }
}

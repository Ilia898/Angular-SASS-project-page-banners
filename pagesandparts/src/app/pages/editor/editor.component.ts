import { Component, OnInit, AfterViewInit} from '@angular/core';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import pagesBlock from '../../Json/editor.json';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit, AfterViewInit{

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

}

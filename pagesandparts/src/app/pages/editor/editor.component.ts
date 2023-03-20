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

  pageNumber: number[] =
  [ 1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60];

  constructor() { }

  ngOnInit() {
  }


  pageN(i: any){
    this.pageHidden = i;
  }

test(){
  console.log(this.pagesBlock[0], this.pageNumber[0])
}


}

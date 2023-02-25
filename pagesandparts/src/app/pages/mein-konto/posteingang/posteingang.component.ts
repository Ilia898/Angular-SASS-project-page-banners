import { Component, OnInit } from '@angular/core';
import meinKonto from '../../../Json/mein-konto.json';

@Component({
  selector: 'app-posteingang',
  templateUrl: './posteingang.component.html',
  styleUrls: ['./posteingang.component.scss']
})
export class PosteingangComponent implements OnInit {

  title = 'Mein Posteingang';

  posteingang:any = meinKonto.posteingangBlock;
  hiddenText: any = {};

  constructor() { }

  ngOnInit() {
  }

  btnPostText(){

  }



}

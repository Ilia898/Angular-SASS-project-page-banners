import { Component, OnInit } from '@angular/core';
import meinKonto from '../../../Json/mein-konto.json';

@Component({
  selector: 'app-kontodetails',
  templateUrl: './kontodetails.component.html',
  styleUrls: ['./kontodetails.component.scss']
})
export class KontodetailsComponent implements OnInit {

  title = 'Meine Kontodetails';

  kontoBlock: any = meinKonto.kontodetailsBlock[0];
  inputVorname: string = this.kontoBlock.vorname;
  inputNachname: string = this.kontoBlock.nachname;

  btnHiddenVorname: boolean = true;
  btnHiddenNachname: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  btnSpeichernVorname(){
    this.btnHiddenVorname = true;
  }

  btnSpeichernNachname(){
    this.btnHiddenNachname = true;
  }

}

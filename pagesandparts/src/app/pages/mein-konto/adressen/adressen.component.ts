import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import meinKonto from '../../../Json/mein-konto.json';

@Component({
  selector: 'app-adressen',
  templateUrl: './adressen.component.html',
  styleUrls: ['./adressen.component.scss']
})
export class AdressenComponent implements OnInit {

  title = 'adressen';

  adressen: any = meinKonto.adressenBlock;

  iconPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}

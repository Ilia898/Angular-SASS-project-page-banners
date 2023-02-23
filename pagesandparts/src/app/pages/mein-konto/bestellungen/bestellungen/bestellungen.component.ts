import { Component, OnInit } from '@angular/core';
import {faBagShopping, faTruck, faGift } from '@fortawesome/free-solid-svg-icons';
import meinKonto from '../../../../Json/mein-konto.json';

@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.scss']
})
export class BestellungenComponent implements OnInit {

  title = 'meine bestellungen';

  bestellungen: any = meinKonto.bestellungenBlock;

  iconBag = faBagShopping;
  iconTruck = faTruck;
  iconGift = faGift;


  constructor() { }

  ngOnInit() {
  }

}

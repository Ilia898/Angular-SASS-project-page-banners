import { Component } from '@angular/core';
import meinKonto from '../../Json/mein-konto.json';

@Component({
  selector: 'app-mein-konto',
  templateUrl: './mein-konto.component.html',
  styleUrls: ['./mein-konto.component.scss']
})
export class MeinKontoComponent {

  kontoMenuJson: any = meinKonto.menuBlock;

}

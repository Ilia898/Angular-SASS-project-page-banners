import { Component } from '@angular/core';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import products from '../../Json/warenkorb.json';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss']
})
export class WarenkorbComponent {

  iconCheck = faCheckSquare;
  product = products.products;


  totalPrice = 0;

  ngOnInit() {
    this.totalPrice = this.product.reduce((sum: any, item: {
      menge: any; price: any;
}) => sum + (item.price *  item.menge), 0);
  }


  hnhGgg(){
    console.log(this.product.menge);
  }




}


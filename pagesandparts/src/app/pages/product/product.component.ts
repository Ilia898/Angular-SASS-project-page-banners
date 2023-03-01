import { Component } from '@angular/core';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import products  from '../../Json/productdescription.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  fullStar = faStar;
  halfFullStar = faStarHalfStroke;
  noFullStar = farStar;

  valueRate = 162;
  totalStars = 5;

  product = products.mainProducts[0];


  mainImage = this.product.productsImage[0].url;
  activImage = this.mainImage;


  imagePreview(proImage: any){
    this.mainImage = this.product.productsImage[proImage.id].url;
  }

  test(){
    console.log(this.product)
  }

}

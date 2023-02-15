import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {



  productsImage =[
    {"id": "0", "url": "../assets/product-slider-image/HOME.jpg"},
    {"id": "1", "url": "../assets/product-slider-image/HOME4.jpg"},
    {"id": "2", "url": "../assets/product-slider-image/HOME7.jpg"},
    {"id": "3", "url": "../assets/product-slider-image/HOME17.jpg"},
    {"id": "4", "url": "../assets/product-slider-image/HOME48.jpg"}
  ]

  mainImage = this.productsImage[0].url;
  activImage = this.mainImage;

  valueRate = 3;
  totalStars = 5;
  priceValue = 25.25;


  imagePreview(proImage: any){
    this.mainImage = this.productsImage[proImage.id].url;

  }

}

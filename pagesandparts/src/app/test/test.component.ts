import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  items = [    { name: 'Item 1', price: 10, quantity: 1 },    { name: 'Item 2', price: 20, quantity: 1 },    { name: 'Item 3', price: 30, quantity: 1 }  ];

}

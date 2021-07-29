import {Component, Input, OnInit} from '@angular/core';
import {Cart} from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() model: Cart;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{
    alert('submitted');
  }
}

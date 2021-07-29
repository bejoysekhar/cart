import { Component, OnInit } from '@angular/core';
import { Product} from './product';
import {PRODUCTS} from './mock-products';
import {ProductsService} from './products.service';
import {Cart} from '../cart/cart';
import {Item} from '../cart/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  title = 'Online Product Store';

  products = PRODUCTS;


  product: Product = {
    id: 1,
    name: 'HP Laptop',
    description: 'HP Laptop Description'
  };

  selectedProduct: Product[];
  cart: Cart;
  itemDtoList: Item[];

  constructor(private productsService: ProductsService) {

    this.cart = new Cart();
    this.cart.userId = 1;

    this.itemDtoList = new Array<Item>();
  }

  ngOnInit(): void {
  }

  showProduct(): void {
    this.productsService.getProducts().subscribe((data: Product[]) =>
      this.selectedProduct = data
    );
  }

  onSelect(product: Product): void {
    this.itemDtoList.push({itemId: 0, productId: product.id, quantity: 1});
    this.cart.itemDtoList = this.itemDtoList;
  }


}

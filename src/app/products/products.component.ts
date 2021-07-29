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
    let prodIndex = this.itemDtoList.findIndex(e => e.productId === product.id );

    if (prodIndex > -1){
      this.itemDtoList[prodIndex].quantity = this.itemDtoList[prodIndex].quantity +1;
    }else {

      this.itemDtoList.push({
        itemId: 0,
        productId: product.id,
        productName: product.name,
        productDescription: product.description,
        quantity: 1
      });
    }
    this.cart.itemDtoList = this.itemDtoList;
    const tempCart = new Cart();
    tempCart.userId = 1;
    tempCart.itemDtoList = new Array<Item>();
    tempCart.itemDtoList.push({
      itemId: 0,
      productId: product.id,
      productName: product.name,
      productDescription: product.description,
      quantity: 1
    });

    this.productsService.addItemToCart(tempCart);
    prodIndex = -1;
  }


}

import { Component, OnInit } from '@angular/core';
import { Product} from './product';
import {PRODUCTS} from './mock-products';
import {ProductsService} from './products.service';

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

  selectedProduct?: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  showProduct(): void {
    this.productsService.getProducts().subscribe((data: Product[]) =>
      this.selectedProduct = data
    );
  }

  onSelect(product: Product): void {
    // this.selectedProduct = product;
    this.showProduct();
  }


}

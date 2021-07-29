import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';
import {Cart} from '../cart/cart';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ProductsService{

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/product/products');
  }

  addItemToCart(cart: Cart): void{
    this.http.post('http://localhost:8080/product/cart', cart).subscribe(() => console.log("Submitted"));

  }
}

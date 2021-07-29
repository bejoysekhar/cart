import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from './cart';

@Injectable()
export class CartService{

  constructor(private http: HttpClient) {
  }

  saveCart(cart: Cart): void{
    this.http.post('http://localhost:8080/product/cart', cart);
  }
}

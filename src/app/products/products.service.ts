import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';

@Injectable()
export class ProductsService{

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/product/products');
  }
}

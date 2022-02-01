import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  loadProduct() {
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(map((albums) => albums || []));
  }
}

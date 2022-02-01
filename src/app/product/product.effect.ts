import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from './product.service';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product API] Invoke API'),
      mergeMap(() =>
        this.productService
          .loadProduct()
          .pipe(map((data) => ({ type: '[Product API] Product API Success', allProduct: data })))
      )
    )
  );
}

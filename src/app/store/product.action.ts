import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../product/product.model';

export const retrievedProductList = createAction(
  '[Product API] Product API Success',
  props<{ allProduct: ProductModel[] }>()
);

export const invokeProductAPI = createAction('[Product API] Invoke API');

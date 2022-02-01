import { createReducer, on } from '@ngrx/store';
import { ProductModel } from '../product/product.model';
import { retrievedProductList } from './product.action';

export const initialState: ReadonlyArray<ProductModel> = [];

const _productReducer = createReducer(
  initialState,
  on(retrievedProductList, (state, { allProduct }) => {
    return [...allProduct];
  })
);

export function productReducer(state: any, action: any) {
  return _productReducer(state, action);
}

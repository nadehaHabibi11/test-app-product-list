import { createSelector } from '@ngrx/store';
import { ProductModel } from '../product/product.model';

import { AppState } from './app.state';

export const productSelector =(state: AppState) => state.product;

export const uniqueAlbumIds = createSelector(
  productSelector,
  (product: ProductModel[]) => {
    return [...new Set(product.map((_) => _.albumId))];
  }
);

export const albumCollectionByAlbumId = (albumId:number) => createSelector(
    productSelector,
    (product:ProductModel[]) => {
        if(albumId == -1){
            return product;
        }
        return product.filter(_ => _.id == albumId);
    }
)

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductService } from './product.service';
import { retrievedProductList, invokeProductAPI } from '../store/product.action';
import {
  uniqueAlbumIds,
  albumCollectionByAlbumId,
} from '../store/product.selector';
import { ProductModel } from './product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
  selector: 'product',
})
export class ProductComponent implements OnInit {
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allProduct$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  );
  constructor(
    private store: Store<{ product: ProductModel[] }>,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  getProductById(item: any) {
    console.log(JSON.stringify(item));
  }

  ngOnInit(): void {
    this.store.dispatch(invokeProductAPI());
  }
  albumChange(event:number) {
    this.allProduct$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }
}

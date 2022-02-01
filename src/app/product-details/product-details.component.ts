import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, State, Store } from '@ngrx/store';
import { ProductModel } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { AppState } from '../store/app.state';
import { invokeProductAPI } from '../store/product.action';
import { albumCollectionByAlbumId } from '../store/product.selector';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedAlbumId = 1;
  productDetails: any;

  constructor(
    private store: Store<{ product: ProductModel[] }>,
    private productService: ProductService,
    private route: ActivatedRoute,
    private state: State<AppState>,
    private _location: Location
  ) { }

  setProductDetails(product: any) {
    const id = this.route.snapshot.paramMap.get('id');
    return product.find((product: any) => {
      return product.id.toString() === id;
    });
  }

  ngOnInit(): void {
    this.store.select('product').subscribe((product) => {
      this.productDetails = this.setProductDetails(product);
    });
    const { product = [] } = this.state.getValue();
    if (product && product.length === 0) {
      this.store.dispatch(invokeProductAPI());
    }

  }

  backClicked() {
    this._location.back();
  }

}

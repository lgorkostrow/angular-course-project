import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {Observable} from "rxjs";
import {addProduct} from "../../../cart/store/cart.actions";
import {
  selectProductLoading,
  selectSelectedProductByUrl
} from "../../../store/product.selectors";

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  showProgress!: Observable<boolean>;
  product!: Observable<ProductModel | null>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.product = this.store.select(selectSelectedProductByUrl);
    this.showProgress = this.store.select(selectProductLoading);
  }

  onBuy(product: ProductModel) {
    this.store.dispatch(addProduct({product}));
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductComponent} from "../product/product.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {Observable} from "rxjs";
import {addProduct} from "../../../cart/store/cart.actions";
import {selectProductLoading, selectSelectedProduct} from "../../../store/product.selectors";

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent extends ProductComponent implements OnInit {
  product!: Observable<ProductModel | null>;

  constructor(
    store: Store<AppState>,
  ) {
    super(store);
  }

  ngOnInit(): void {
    this.product = this.store.select(selectSelectedProduct);
    this.showProgress = this.store.select(selectProductLoading);
  }

  onBuy(product: ProductModel) {
    this.store.dispatch(addProduct({product}));
  }
}

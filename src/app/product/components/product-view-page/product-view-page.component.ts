import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductComponent} from "../product/product.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {Subscription} from "rxjs";
import {addProduct} from "../../../cart/store/cart.actions";

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent extends ProductComponent implements OnInit, OnDestroy {
  product!: ProductModel;

  private subscription!: Subscription

  constructor(
    store: Store<AppState>,
  ) {
    super(store);
  }

  ngOnInit(): void {
    this.subscription = this.store.select('products')
      .subscribe(data => {
        this.product = data.selectedProduct!;
        this.showProgress = data.loading;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onBuy(product: ProductModel) {
    this.store.dispatch(addProduct({product}));
  }
}

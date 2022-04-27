import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductComponent} from "../product/product.component";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {addProduct} from "../../../cart/store/cart.actions";
import {fetchProducts} from "../../store/product.actions";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent extends ProductComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];

  private subscription!: Subscription

  constructor(
    store: Store<AppState>,
  ) {
    super(store);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());

    this.subscription = this.store.select('products')
      .subscribe(data => {
        this.products = data.products;
        this.showProgress = data.loading;
      });
  }

  onBuy(product: ProductModel): void {
    this.store.dispatch(addProduct({product}));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

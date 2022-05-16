import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {addProduct} from "../../../cart/store/cart.actions";
import {fetchProducts} from "../../store/product.actions";
import {selectProductItems, selectProductLoading} from "../../../store/product.selectors";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  showProgress!: Observable<boolean>;
  products!: Observable<ProductModel[]>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());

    this.products = this.store.select(selectProductItems);
    this.showProgress = this.store.select(selectProductLoading);
  }

  onBuy(product: ProductModel): void {
    this.store.dispatch(addProduct({product}));
  }
}

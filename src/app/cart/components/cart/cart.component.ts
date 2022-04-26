import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {
  DecreaseQuantityAction,
  DeleteItemAction,
  FetchCartAction,
  IncreaseQuantityAction
} from "../../store/cart.actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItemModel[] = [];
  cartTotalSum = 0;
  cartTotalQuantity = 0;
  isEmptyCart = true;

  private subscription!: Subscription

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchCartAction());

    this.subscription = this.store.select('cart')
      .subscribe(data => {
        this.cartItems = [...data.items];
        this.cartTotalSum = data.totalSum;
        this.cartTotalQuantity = data.totalQuantity;
        this.isEmptyCart = data.isEmpty;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onIncreaseCartItem(productId: number): void {
    this.store.dispatch(new IncreaseQuantityAction(productId));
  }

  onDecreaseCartItem(productId: number): void {
    this.store.dispatch(new DecreaseQuantityAction(productId));
  }

  onDeleteCartItem(productId: number): void {
    this.store.dispatch(new DeleteItemAction(productId));
  }
}

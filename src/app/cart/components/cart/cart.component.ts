import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {Observable, of, Subscription} from "rxjs";
import {decreaseQuantity, deleteItem, fetchCart, increaseQuantity} from "../../store/cart.actions";
import {
  selectCartIsEmpty,
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalSum
} from "../../../store/cart.selectors";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Observable<CartItemModel[]> = of([]);
  cartTotalSum: Observable<number> = of(0);
  cartTotalQuantity: Observable<number> = of(0);
  isEmptyCart: Observable<boolean> = of(true);

  private subscription!: Subscription

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fetchCart());

    this.cartItems = this.store.select(selectCartItems);
    this.cartTotalSum = this.store.select(selectCartTotalSum);
    this.cartTotalQuantity = this.store.select(selectCartTotalQuantity);
    this.isEmptyCart = this.store.select(selectCartIsEmpty);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onIncreaseCartItem(productId: number): void {
    this.store.dispatch(increaseQuantity({productId}));
  }

  onDecreaseCartItem(productId: number): void {
    this.store.dispatch(decreaseQuantity({productId}));
  }

  onDeleteCartItem(productId: number): void {
    this.store.dispatch(deleteItem({productId}));
  }
}

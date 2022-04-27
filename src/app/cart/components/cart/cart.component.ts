import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {Subscription} from "rxjs";
import {decreaseQuantity, deleteItem, fetchCart, increaseQuantity} from "../../store/cart.actions";

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
    this.store.dispatch(fetchCart());

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
    this.store.dispatch(increaseQuantity({productId}));
  }

  onDecreaseCartItem(productId: number): void {
    this.store.dispatch(decreaseQuantity({productId}));
  }

  onDeleteCartItem(productId: number): void {
    this.store.dispatch(deleteItem({productId}));
  }
}

import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {
  selectCartIsEmpty,
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalSum
} from "../../store/cart.selectors";
import {decreaseQuantity, deleteItem, fetchCart, increaseQuantity} from "../store/cart.actions";

@Injectable({providedIn: 'root'})
export class CartFacade {
  readonly cartItems = this.store.select(selectCartItems);
  readonly cartTotalSum = this.store.select(selectCartTotalSum);
  readonly cartTotalQuantity = this.store.select(selectCartTotalQuantity);
  readonly isEmptyCart = this.store.select(selectCartIsEmpty);

  constructor(private store: Store<AppState>) {}

  loadCart(): void {
    this.store.dispatch(fetchCart());
  }

  increaseQuantity(productId: number): void {
    this.store.dispatch(increaseQuantity({productId}));
  }

  decreaseQuantity(productId: number): void {
    this.store.dispatch(decreaseQuantity({productId}));
  }

  deleteCartItem(productId: number): void {
    this.store.dispatch(deleteItem({productId}));
  }
}

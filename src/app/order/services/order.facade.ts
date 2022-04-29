import {Injectable} from "@angular/core";
import {selectCartItems} from "../../store/cart.selectors";
import {take} from "rxjs/operators";
import {createOrder} from "../store/order.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";

@Injectable({providedIn: 'root'})
export class OrderFacade {
  constructor(private store: Store<AppState>) {}

  createOrder(): void {
    this.store.select(selectCartItems).pipe(
      take(1),
    )
      .subscribe(cartItems => this.store.dispatch(createOrder({products: cartItems})));
  }
}

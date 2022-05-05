import {Injectable} from "@angular/core";
import {selectCartItems} from "../../store/cart.selectors";
import {take} from "rxjs/operators";
import {createOrder, initializeOrder} from "../store/order.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {PersonalInformation} from "../models/personal-information.model";

@Injectable({providedIn: 'root'})
export class OrderFacade {
  constructor(private store: Store<AppState>) {}

  initializeOrder(): void {
    this.store.select(selectCartItems).pipe(
      take(1),
    )
      .subscribe(cartItems => this.store.dispatch(initializeOrder({products: cartItems})));
  }

  createOrder(personalInformation: PersonalInformation): void {
    this.store.dispatch(createOrder({personalInformation}));
  }
}

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  ADD_PRODUCT_TO_CART,
  DECREASE_QUANTITY,
  FETCH_CART,
  INCREASE_QUANTITY,
  SetCartAction
} from "./cart.actions";
import {map, switchMap} from "rxjs/operators";
import {CartRepository} from "../services/cart.repository";
import {CartItemModel} from "../models/cart-item.model";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {CartState} from "./cart.reducer";
import {SnackbarService} from "../../core/services/snackbar.service";

@Injectable()
export class CartEffects {
  fetchCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_CART),
      switchMap(() => this.cartRepository.getStoredCart()),
      map((items: CartItemModel[]) => new SetCartAction(items)),
    );
  });

  saveInStorage = createEffect(() => {
    return this.actions$.pipe(
      ofType(ADD_PRODUCT_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY),
      switchMap(() => this.store.select('cart')),
      map((state: CartState) => {
        this.cartRepository.save(state.items);
      })
    );
  }, { dispatch: false });

  showNotification = createEffect(() => {
    return this.actions$.pipe(
      ofType(ADD_PRODUCT_TO_CART),
      map((state: CartState) => {
        this.snackbarService.message('Product Added');
      })
    );
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private cartRepository: CartRepository,
    private store: Store<AppState>,
    private snackbarService: SnackbarService,
  ) {}
}

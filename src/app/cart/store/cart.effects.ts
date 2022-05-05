import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap, take} from "rxjs/operators";
import {CartRepository} from "../services/cart.repository";
import {CartItemModel} from "../models/cart-item.model";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {CartState} from "./cart.reducer";
import {SnackbarService} from "../../core/services/snackbar.service";
import {
  addProduct,
  clearCart,
  decreaseQuantity,
  deleteItem,
  fetchCart,
  increaseQuantity,
  setCart
} from "./cart.actions";
import {selectCartState} from "../../store/cart.selectors";

@Injectable()
export class CartEffects {
  fetchCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchCart),
      switchMap(() => this.cartRepository.getStoredCart()),
      map((items: CartItemModel[]) => setCart({items})),
    );
  });

  saveInStorage = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProduct, increaseQuantity, decreaseQuantity, deleteItem),
      switchMap(() => this.store.select(selectCartState).pipe(take(1))),
      map((state: CartState) => {
        this.cartRepository.save(state.items);
      })
    );
  }, { dispatch: false });

  clearStorageCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(clearCart),
      map(() => this.cartRepository.clear()),
    );
  }, { dispatch: false });

  showNotification = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProduct),
      map((data) => {
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

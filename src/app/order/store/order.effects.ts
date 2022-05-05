import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {clearOrderState, createOrder, initializeOrder} from "./order.actions";
import {delay, map, switchMap, take} from "rxjs/operators";
import {routerGo} from "../../store/router.actions";
import {SnackbarService} from "../../core/services/snackbar.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {selectOrderState} from "../../store/order.selectors";
import {OrderState} from "./order.reducer";
import {clearCart} from "../../cart/store/cart.actions";

@Injectable()
export class OrderEffects {
  redirectToOrderPage = createEffect(() => {
    return this.actions$.pipe(
      ofType(initializeOrder),
      map(() => routerGo({path: ['/process-order']})),
    );
  });

  clearStateAndShowMessage = createEffect(() => {
    return this.actions$.pipe(
      ofType(createOrder),
      switchMap(() => this.store.select(selectOrderState).pipe(take(1))),
      map((state: OrderState) => {
        console.log(state);

        this.snackbarService.message('Order created');

        return clearOrderState();
      }),
    );
  });

  clearCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(clearOrderState),
      map(() => clearCart()),
    );
  });

  redirectToMainPage = createEffect(() => {
    return this.actions$.pipe(
      ofType(clearOrderState),
      delay(1500),
      map(() => routerGo({path: ['/products']})),
    );
  });

  constructor(
    private actions$: Actions,
    private snackbarService: SnackbarService,
    private store: Store<AppState>,
  ) {}
}

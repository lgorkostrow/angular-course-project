import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {createOrder} from "./order.actions";
import {map} from "rxjs/operators";
import {routerGo} from "../../store/router.actions";

@Injectable()
export class OrderEffects {
  createOrder = createEffect(() => {
    return this.actions$.pipe(
      ofType(createOrder),
      map(() => routerGo({path: ['/process-order']})),
    );
  });

  constructor(private actions$: Actions) {}
}

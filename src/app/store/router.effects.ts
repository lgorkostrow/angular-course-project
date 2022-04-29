import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {routerGo} from "./router.actions";
import {map, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class RouterEffects {
  navigate = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerGo),
        map(action => {
          const { type, path, queryParams, extras } = { ...action };

          return { path, queryParams, extras };
        }),
        tap(({ path, queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}

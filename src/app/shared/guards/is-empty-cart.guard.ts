import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {map, take} from "rxjs/operators";
import {Observable} from "rxjs";
import {selectCartIsEmpty} from "../../store/cart.selectors";

@Injectable({providedIn: 'root'})
export class IsEmptyCartGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.select(selectCartIsEmpty)
      .pipe(
        take(1),
        map(isEmpty => {
          if (!isEmpty) {
            return true;
          }

          return this.router.parseUrl('/products');
        }),
      );
  }
}

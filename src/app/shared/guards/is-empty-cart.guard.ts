import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {map, take} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class IsEmptyCartGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.select('cart')
      .pipe(
        take(1),
        map(data => {
          if (!data.isEmpty) {
            return true;
          }

          return this.router.parseUrl('/products');
        }),
      );
  }
}

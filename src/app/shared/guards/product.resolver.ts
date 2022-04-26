import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductModel} from "../../product/models/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {map, take} from "rxjs/operators";

export function storeProductResolver(store: string, fetchAction: Action) {
  return {
    data: {
      store,
      fetchAction,
    },
    resolve: {product: ProductResolver}
  };
}

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    const fetchAction = Object.assign({}, route.data.fetchAction)
    fetchAction.payload = +route.params['productID'];

    this.store.dispatch(fetchAction);

    return this.store.select(route.data.store)
      .pipe(
        take(1),
        map(data => data.selectedProduct!)
      );
  }
}

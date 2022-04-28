import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductModel} from "../../product/models/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {take} from "rxjs/operators";
import {selectSelectedProductAvailableByUrl, selectSelectedProductByUrl} from "../../store/product.selectors";

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
    let productAvailable = false;
    this.store.select(selectSelectedProductAvailableByUrl)
      .pipe(
        take(1),
      )
      .subscribe((data => productAvailable = data));

    if (!productAvailable) {
      this.store.dispatch(route.data.fetchAction({productId: +route.params['productID']}));
    }

    return this.store.select(selectSelectedProductByUrl).pipe(take(1));
  }
}

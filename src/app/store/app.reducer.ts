import {productReducer, ProductState} from "../product/store/product.reducer";
import {ActionReducerMap} from "@ngrx/store";
import {cartReducer, CartState} from "../cart/store/cart.reducer";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {Params} from "@angular/router";
import {orderReducer, OrderState} from "../order/store/order.reducer";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface RouterState {
  router: RouterReducerState<RouterStateUrl>;
}

export interface AppState {
  products: ProductState;
  cart: CartState;
  router: RouterStateUrl;
  order: OrderState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  products: productReducer,
  cart: cartReducer,
  router: routerReducer,
  order: orderReducer,
};

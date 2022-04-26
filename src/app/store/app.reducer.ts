import {productReducer, ProductState} from "../product/store/product.reducer";
import {ActionReducerMap} from "@ngrx/store";
import {cartReducer, CartState} from "../cart/store/cart.reducer";

export interface AppState {
  products: ProductState;
  cart: CartState,
}

export const appReducer: ActionReducerMap<AppState, any> = {
  products: productReducer,
  cart: cartReducer,
};

import {AppState} from "./app.reducer";
import {createSelector} from "@ngrx/store";
import {CartState} from "../cart/store/cart.reducer";

export const selectCartState = (state: AppState) => state.cart;
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items,
);
export const selectCartTotalSum = createSelector(
  selectCartState,
  (state: CartState) => state.totalSum,
);
export const selectCartTotalQuantity = createSelector(
  selectCartState,
  (state: CartState) => state.totalQuantity,
);
export const selectCartIsEmpty = createSelector(
  selectCartState,
  (state: CartState) => state.isEmpty,
);

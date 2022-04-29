import {CartItemModel} from "../../cart/models/cart-item.model";
import {Action, createReducer, on} from "@ngrx/store";
import {createOrder} from "./order.actions";

export interface OrderState {
  products: CartItemModel[];
  totalSum: number;
}

const initialState: OrderState = {
  products: [],
  totalSum: 0,
};

const reducer = createReducer(
  initialState,
  on(createOrder, (state, {products}) => {
    console.log('createOrder');
    return {
      ...state,
      products: [...products],
      totalSum: products.reduce((sum: number, current: CartItemModel) => sum + current.totalPrice, 0),
    };
  }),
);

export function orderReducer(state: OrderState | undefined, action: Action) {
  return reducer(state, action);
}

import {CartItemModel} from "../../cart/models/cart-item.model";
import {Action, createReducer, on} from "@ngrx/store";
import {clearOrderState, createOrder, initializeOrder} from "./order.actions";
import {PersonalInformation} from "../models/personal-information.model";

export interface OrderState {
  products: CartItemModel[];
  totalSum: number;
  personalInformation: PersonalInformation | null;
}

const initialState: OrderState = {
  products: [],
  totalSum: 0,
  personalInformation: null,
};

const reducer = createReducer(
  initialState,
  on(initializeOrder, (state, {products}) => {
    return {
      ...state,
      products: [...products],
      totalSum: products.reduce((sum: number, current: CartItemModel) => sum + current.totalPrice, 0),
    };
  }),
  on(createOrder, (state, {personalInformation}) => {
    return {
      ...state,
      personalInformation: personalInformation,
    };
  }),
  on(clearOrderState, (state) => {
    return {
      ...state,
      products: [],
      totalSum: 0,
      personalInformation: null,
    };
  }),
);

export function orderReducer(state: OrderState | undefined, action: Action) {
  return reducer(state, action);
}

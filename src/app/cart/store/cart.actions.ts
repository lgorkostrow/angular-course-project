import {Action} from "@ngrx/store";
import {CartItemModel} from "../models/cart-item.model";
import {ProductModel} from "../../product/models/product.model";

export const FETCH_CART = '[Cart] Fetch cart items';
export const SET_CART = '[Cart] Set cart items';
export const ADD_PRODUCT_TO_CART = '[Cart] Add product';
export const INCREASE_QUANTITY = '[Cart] Increase quantity'
export const DECREASE_QUANTITY = '[Cart] Decrease quantity'
export const DELETE_ITEM = '[Cart] Delete item'

export class FetchCartAction implements Action {
  readonly type = FETCH_CART;
}

export class SetCartAction implements Action {
  readonly type = SET_CART;

  constructor(public payload: CartItemModel[]) {}
}

export class AddProductToCartAction implements Action {
  readonly type = ADD_PRODUCT_TO_CART;

  constructor(public payload: ProductModel) {}
}

export class IncreaseQuantityAction implements Action {
  readonly type = INCREASE_QUANTITY;

  constructor(public payload: ProductModel['id']) {}
}

export class DecreaseQuantityAction implements Action {
  readonly type = DECREASE_QUANTITY;

  constructor(public payload: ProductModel['id']) {}
}

export class DeleteItemAction implements Action {
  readonly type = DELETE_ITEM;

  constructor(public payload: ProductModel['id']) {}
}

export type CartAction =
  FetchCartAction
  | SetCartAction
  | AddProductToCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | DeleteItemAction;

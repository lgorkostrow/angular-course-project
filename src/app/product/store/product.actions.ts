import {Action} from "@ngrx/store";
import {ProductModel} from "../models/product.model";

export const FETCH_PRODUCTS = '[Products] Fetch Products';
export const SET_PRODUCTS = '[Products] Set Products';

export const FETCH_PRODUCT = '[Products] Fetch Product';
export const SET_PRODUCT = '[Products] Set Product';

export class FetchProductsAction implements Action {
  readonly type = FETCH_PRODUCTS;
}

export class SetProductsAction implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: ProductModel[]) {}
}

export class FetchProductAction implements Action {
  readonly type = FETCH_PRODUCT;

  constructor(public payload: ProductModel['id']) {}
}

export class SetProductAction implements Action {
  readonly type = SET_PRODUCT;

  constructor(public payload: ProductModel) {}
}

export type ProductAction = FetchProductsAction | SetProductsAction | FetchProductAction | SetProductAction;

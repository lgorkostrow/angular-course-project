import {ProductModel} from "../models/product.model";
import {FETCH_PRODUCT, FETCH_PRODUCTS, ProductAction, SET_PRODUCT, SET_PRODUCTS} from "./product.actions";

export interface ProductState {
  products: ProductModel[];
  selectedProduct: ProductModel | null,
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
};

export function productReducer(state: ProductState = initialState, action: ProductAction) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [],
        loading: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        loading: false,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        selectedProduct: null,
        loading: true,
      };
    case SET_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
        loading: false,
      };
  }

  return state;
}

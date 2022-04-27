import {ProductModel} from "../models/product.model";
import {Action, createReducer, on} from "@ngrx/store";
import {fetchProduct, fetchProducts, setProduct, setProducts} from "./product.actions";

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

const reducer = createReducer(
  initialState,
  on(fetchProducts, state => {
    return {
      ...state,
      products: [],
      loading: true,
    };
  }),
  on(setProducts, (state, {products}) => {
    return {
      ...state,
      products: [...products],
      loading: false,
    }
  }),
  on(fetchProduct, state => {
    return {
      ...state,
      selectedProduct: null,
      loading: true,
    };
  }),
  on(setProduct, (state, {product}) => {
    return {
      ...state,
      selectedProduct: product,
      loading: false,
    };
  }),
);

export function productReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}

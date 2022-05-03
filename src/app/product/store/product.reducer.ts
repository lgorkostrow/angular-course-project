import {ProductModel} from "../models/product.model";
import {Action, createReducer, on} from "@ngrx/store";
import {fetchProduct, fetchProducts, setProduct, setProducts} from "./product.actions";

export interface ProductState {
  products: ProductModel[];
  productsViewModels: ProductModel[], // The view model can have more fields than the list model
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  productsViewModels: [],
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
      loading: true,
    };
  }),
  on(setProduct, (state, {product}) => {
    let models = [...state.productsViewModels];
    models.push(product);

    return {
      ...state,
      productsViewModels: models,
      loading: false,
    };
  }),
);

// Уже не обязательно делать тукую обертку, раньше надо было.
export function productReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}

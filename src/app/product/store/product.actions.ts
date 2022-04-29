import {createAction, props} from "@ngrx/store";
import {ProductModel} from "../models/product.model";

export const fetchProducts = createAction('[Products] Fetch Products');
export const setProducts = createAction(
  '[Products] Set Products',
  props<{products: ProductModel[]}>(),
);
export const fetchProduct = createAction(
  '[Products] Fetch Product',
    props<{productId: ProductModel['id']}>(),
  );
export const setProduct = createAction(
  '[Products] Set Product',
  props<{product: ProductModel}>(),
);

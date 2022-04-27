import {AppState} from "./app.reducer";
import {createSelector} from "@ngrx/store";
import {ProductState} from "../product/store/product.reducer";

export const selectProductState = (state: AppState) => state.products;
export const selectProductItems = createSelector(
  selectProductState,
  (state: ProductState) => state.products,
);
export const selectSelectedProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProduct,
);
export const selectProductLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading,
);

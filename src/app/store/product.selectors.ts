import {AppState} from "./app.reducer";
import {createSelector} from "@ngrx/store";
import {ProductState} from "../product/store/product.reducer";
import {selectRouteNestedParam} from "./router.selectors";
import {ProductModel} from "../product/models/product.model";

export const selectProductState = (state: AppState) => state.products;
export const selectProductItems = createSelector(
  selectProductState,
  (state: ProductState) => state.products,
);

export const selectSelectedProductAvailableByUrl = createSelector(
  selectProductState,
  selectRouteNestedParam('productID'),
  (productState: ProductState, productID: string): boolean => {
    return productState.productsViewModels.findIndex(product => product.id === +productID) !== -1;
  },
);

export const selectSelectedProductByUrl = createSelector(
  selectProductState,
  selectRouteNestedParam('productID'),
  (productState: ProductState, productID: string): ProductModel => {
    return productState.productsViewModels.find(product => product.id === +productID)!;
  },
);
export const selectProductLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading,
);

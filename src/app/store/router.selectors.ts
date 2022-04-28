import {createFeatureSelector, createSelector} from "@ngrx/store";
import {getSelectors, RouterReducerState} from "@ngrx/router-store";
import {RouterStateUrl} from "./app.reducer";

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouterState);

export const selectRouteNestedParams = createSelector(
  selectRouterState,
  (router) => {
    return {
      ...router.state.params,
      ...router.state.queryParams,
    }
  }
);

export const selectRouteNestedParam = (param: string) =>
  createSelector(selectRouteNestedParams, (params) => params && params[param]);

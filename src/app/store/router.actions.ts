import {createAction, props} from "@ngrx/store";
import {NavigationExtras} from "@angular/router";

export const routerGo = createAction(
  '[Router] Go',
  props<{ path: any[]; queryParams?: object; extras?: NavigationExtras }>()
);

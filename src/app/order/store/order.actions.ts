import {createAction, props} from "@ngrx/store";
import {CartItemModel} from "../../cart/models/cart-item.model";

export const createOrder = createAction('[Order] Create order', props<{products: CartItemModel[]}>());

import {createAction, props} from "@ngrx/store";
import {CartItemModel} from "../../cart/models/cart-item.model";
import {PersonalInformation} from "../models/personal-information.model";

export const initializeOrder = createAction('[Order] Initialize order', props<{products: CartItemModel[]}>());
export const createOrder = createAction('[Order] Create order', props<{personalInformation: PersonalInformation}>());
export const clearOrderState = createAction('[Order] Clear order state');

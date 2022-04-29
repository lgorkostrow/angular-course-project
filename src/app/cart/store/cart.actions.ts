import {createAction, props} from "@ngrx/store";
import {CartItemModel} from "../models/cart-item.model";
import {ProductModel} from "../../product/models/product.model";

export const fetchCart = createAction('[Cart] Fetch cart items');
export const setCart = createAction('[Cart] Set cart items', props<{items: CartItemModel[]}>());
export const addProduct = createAction('[Cart] Add product', props<{product: ProductModel}>());
export const increaseQuantity = createAction('[Cart] Increase quantity', props<{productId: ProductModel['id']}>());
export const decreaseQuantity = createAction('[Cart] Decrease quantity', props<{productId: ProductModel['id']}>());
export const deleteItem = createAction('[Cart] Delete item', props<{productId: ProductModel['id']}>());
export const clearCart = createAction('[Cart] Clear cart');

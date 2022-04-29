import {CartItemModel} from "../models/cart-item.model";
import {addProduct, clearCart, decreaseQuantity, deleteItem, increaseQuantity, setCart} from "./cart.actions";
import {ProductModel} from "../../product/models/product.model";
import {Action, createReducer, on} from "@ngrx/store";

export interface CartState {
  items: CartItemModel[];
  totalSum: number;
  totalQuantity: number;
  isEmpty: boolean;
}

const initialState: CartState = {
  items: [],
  totalSum: 0,
  totalQuantity: 0,
  isEmpty: true,
};

const reducer = createReducer(
  initialState,
  on(setCart, (state, {items}) => {
    return {
      ...state,
      ...updateCartData(items),
    };
  }),
  on(addProduct, (state, {product}) => {
    return addProductToCartHandler(state, product);
  }),
  on(increaseQuantity, (state, {productId}) => {
    return increaseQuantityHandler(state, productId);
  }),
  on(decreaseQuantity, (state, {productId}) => {
    return decreaseQuantityHandler(state, productId);
  }),
  on(deleteItem, (state, {productId}) => {
    return deleteItemHandler(state, productId);
  }),
  on(clearCart, state => {
    return {
      ...state,
      ...updateCartData([]),
    };
  }),
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}

const addProductToCartHandler = (state: CartState, product: ProductModel): CartState => {
  let items = [...state.items];
  const idx = items.findIndex(x => x.id === product.id);
  if (idx !== -1) {
    const cartItem = items[idx];
    items[idx] = {
      ...cartItem,
      totalPrice: cartItem.totalPrice + cartItem.price,
      quantity: cartItem.quantity + 1,
    };
  }
  else {
    items.push(CartItemModel.createFromProduct(product));
  }

  return {
    ...state,
    ...updateCartData(items),
  };
};

const increaseQuantityHandler = (state: CartState, productId: number): CartState => {
  let items = [...state.items];
  const idx = items.findIndex(x => x.id === productId);
  if (idx === -1) {
    return state;
  }

  const cartItem = items[idx];
  items[idx] = {
    ...cartItem,
    totalPrice: cartItem.totalPrice + cartItem.price,
    quantity: cartItem.quantity + 1,
  };

  return {
    ...state,
    ...updateCartData(items),
  };
};

const decreaseQuantityHandler = (state: CartState, productId: number): CartState => {
  let items = [...state.items];
  const idx = items.findIndex(x => x.id === productId);
  if (idx === -1) {
    return state;
  }

  const cartItem = items[idx];
  if (cartItem.quantity == 1) {
    items.splice(idx, 1);
  } else {
    items[idx] = {
      ...cartItem,
      totalPrice: cartItem.totalPrice - cartItem.price,
      quantity: cartItem.quantity - 1,
    };
  }

  return {
    ...state,
    ...updateCartData(items),
  };
};

const deleteItemHandler = (state: CartState, productId: number): CartState => {
  let items = [...state.items];
  const idx = items.findIndex(x => x.id === productId);
  if (idx === -1) {
    return state;
  }

  items.splice(idx, 1);

  return {
    ...state,
    ...updateCartData(items),
  };
};

const updateCartData = (cartItems: CartItemModel[]): { items: CartItemModel[], totalSum: number, totalQuantity: number, isEmpty: boolean } => {
  return {
    items: [...cartItems],
    totalSum: cartItems.reduce((sum: number, current: CartItemModel) => sum + current.totalPrice, 0),
    totalQuantity: cartItems.reduce((sum: number, current: CartItemModel) => sum + current.quantity, 0),
    isEmpty: cartItems.length === 0,
  };
};

import {CartItemModel} from "../models/cart-item.model";
import {
  ADD_PRODUCT_TO_CART,
  CartAction,
  DECREASE_QUANTITY,
  DELETE_ITEM,
  INCREASE_QUANTITY,
  SET_CART
} from "./cart.actions";
import {ProductModel} from "../../product/models/product.model";

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

export function cartReducer(state: CartState = initialState, action: CartAction) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        ...updateCartData(action.payload),
      };
    case ADD_PRODUCT_TO_CART:
      return addProductToCartHandler(state, action.payload);
    case INCREASE_QUANTITY:
      return increaseQuantityHandler(state, action.payload);
    case DECREASE_QUANTITY:
      return decreaseQuantityHandler(state, action.payload);
    case DELETE_ITEM:
      return deleteItemHandler(state, action.payload);
  }

  return state;
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

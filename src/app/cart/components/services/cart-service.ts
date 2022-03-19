import {ProductModel} from "../../../product/models/product-model";
import {CartItemModel} from "../models/cart-item-model";

export class CartService {
  private _items: CartItemModel[] = [];

  get items(): CartItemModel[] {
    return this._items;
  }

  get total(): number {
    return this._items.reduce((sum: number, current: CartItemModel) => sum + current.price, 0);
  }

  public addItemToCart(item: ProductModel): void {
    let cartItem = this.items.find(x => x.id === item.id);
    if (cartItem) {
      cartItem.addProduct(item);

      return;
    }

    this.items.push(CartItemModel.createFromProduct(item));
  }
}

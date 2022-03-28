import {ProductModel} from "../../product/models/product.model";
import {CartItemModel, SerializedCartItemModel} from "../models/cart-item.model";
import {LocalStorageService, StorageService} from "../../core/services/storage.service";
import {Inject, Injectable} from "@angular/core";
import {Collection} from "../../core/services/collection";
import {APP_CONFIG, AppConfig} from "../../core/services/constant.service";

@Injectable({providedIn: 'root'})
export class CartService {
  private _items: Collection<CartItemModel>;

  get items(): CartItemModel[] {
    return this._items.toArray();
  }

  get totalSum(): number {
    return this._items.reduce((sum: number, current: CartItemModel) => sum + current.totalPrice, 0);
  }

  get totalQuantity(): number {
    return this._items.reduce((sum: number, current: CartItemModel) => sum + current.quantity, 0);
  }

  constructor(
    @Inject(LocalStorageService) private storage: StorageService,
    @Inject(APP_CONFIG) private appConstants: AppConfig,
  ) {
    if (!storage.isKeyExists(appConstants.CartStorageKey)) {
      storage.set(appConstants.CartStorageKey, []);
    }

    const stored = storage
      .get<SerializedCartItemModel[]>(appConstants.CartStorageKey)
      .map(x => CartItemModel.createFromSerializedModel(x));

    this._items = new Collection<CartItemModel>(
      stored,
      (items: CartItemModel[]) => this.storage.set(appConstants.CartStorageKey, items)
    );
  }

  addItemToCart(item: ProductModel): void {
    let cartItem = this._items.find(x => x.id === item.id);
    if (cartItem) {
      cartItem.addProduct(item);
      this._items.replaceAtIndex(this._items.findIndex(x => x.id === item.id), cartItem);

      return;
    }

    this._items.push(CartItemModel.createFromProduct(item));
  }

  increaseQuantity(productId: number): void {
    let item = this._items.find(x => x.id === productId);
    if (!item) {
      throw new Error('Invalid product id');
    }

    item.increaseQuantity();
    this._items.replaceAtIndex(this._items.findIndex(x => x.id === item!.id), item);
  }

  decreaseQuantity(productId: number): void {
    let item = this._items.find(x => x.id === productId);
    if (!item) {
      throw new Error('Invalid product id');
    }

    if (item.quantity === 1) {
      this.deleteItem(productId);

      return;
    }

    item.decreaseQuantity();
    this._items.replaceAtIndex(this._items.findIndex(x => x.id === item!.id), item);
  }

  deleteItem(productId: number): void {
    let idx = this._items.findIndex(x => x.id === productId);
    if (idx === -1) {
      throw new Error('Invalid product id');
    }

    this._items.removeAtIndex(idx);
  }

  clear(): void {
    this._items.clear();
  }

  isEmptyCart(): boolean {
    return this._items.isEmpty();
  }
}

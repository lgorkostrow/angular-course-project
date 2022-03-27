import {ProductModel} from "../../product/models/product.model";

export interface SerializedCartItemModel {
  _id: number;
  _name: string;
  _quantity: number;
  _price: number;
  _totalPrice: number;
}

export class CartItemModel {
  constructor(
    private _id: number,
    private _name: string,
    private _quantity: number,
    private _price: number,
    private _totalPrice: number,
  ) {
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }

  get price(): number {
    return this._price;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  static createFromProduct(product: ProductModel): CartItemModel {
    return new CartItemModel(
      product.id,
      product.name,
      1,
      product.price,
      product.price,
    );
  }

  static createFromSerializedModel(model: SerializedCartItemModel): CartItemModel {
    return new CartItemModel(
      model._id,
      model._name,
      model._quantity,
      model._price,
      model._totalPrice,
    );
  }

  addProduct(product: ProductModel): void {
    if (product.id !== this._id) {
      throw new Error('Invalid product');
    }

    this._totalPrice += product.price;
    this._quantity++;
  }

  increaseQuantity(): void {
    this._totalPrice += this.price;
    this._quantity++;
  }

  decreaseQuantity(): void {
    if (this._quantity === 1) {
      throw new Error('Can not decrease quantity to 0');
    }

    this._totalPrice -= this.price;
    this._quantity--;
  }
}

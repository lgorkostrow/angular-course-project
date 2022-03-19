import {ProductModel} from "../../../product/models/product-model";

export class CartItemModel {
  constructor(
    private _id: number,
    private _name: string,
    private _quantity: number,
    private _price: number,
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

  public static createFromProduct(product: ProductModel): CartItemModel {
    return new CartItemModel(
      product.id,
      product.name,
      1,
      product.price,
    );
  }

  public addProduct(product: ProductModel): void {
    if (product.id !== this._id) {
      throw new Error('Invalid product');
    }

    this._price += product.price;
    this._quantity++;
  }
}

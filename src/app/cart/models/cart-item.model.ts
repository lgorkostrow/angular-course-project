import {ProductModel} from "../../product/models/product.model";

export class CartItemModel {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public price: number,
    public totalPrice: number,
  ) {
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
}

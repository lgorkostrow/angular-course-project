import {BaseRepository} from "../../core/services/base.repository";
import {CategoryEnum, ProductModel} from "../models/product.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProductRepository extends BaseRepository {
  private productList: ProductModel[] = [
    { id: 1, name: 'Lenovo ThinkPad x1 Carbon', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum.', category: CategoryEnum.Laptops, price: 1899.99, isAvailable: true, },
    { id: 2, name: 'Lenovo ThinkPad x1 Nano', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum.', category: CategoryEnum.Laptops, price: 2099, isAvailable: false, },
    { id: 3, name: 'Lenovo ThinkPad x1 Extreme', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum.', category: CategoryEnum.Laptops, price: 2299, isAvailable: true, },
    { id: 4, name: 'MacBook Air M1 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum.', category: CategoryEnum.Laptops, price: 999.99, isAvailable: false, },
    { id: 5, name: 'MacBook Pro M1 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum.', category: CategoryEnum.Laptops, price: 1199, isAvailable: true, },
  ];

  getProducts(): Promise<ProductModel[]> {
    return Promise.resolve(this.productList);
  }

  getProduct(id: number): Promise<ProductModel|undefined> {
    return Promise.resolve(
      this.productList.find(x => x.id === id)
    );
  }
}

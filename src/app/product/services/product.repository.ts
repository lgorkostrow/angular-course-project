import {BaseRepository} from "../../core/services/base.repository";
import {CategoryEnum, ProductModel} from "../models/product.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductRepository extends BaseRepository {
  getProducts(): Promise<ProductModel[]> {
    const productList: ProductModel[] = [
      { id: 1, name: 'Lenovo ThinkPad x1 Carbon', description: '', category: CategoryEnum.Laptops, price: 1899, isAvailable: true, },
      { id: 2, name: 'Lenovo ThinkPad x1 Nano', description: '', category: CategoryEnum.Laptops, price: 2099, isAvailable: false, },
      { id: 3, name: 'Lenovo ThinkPad x1 Extreme', description: '', category: CategoryEnum.Laptops, price: 2299, isAvailable: true, },
      { id: 4, name: 'MacBook Air M1 2020', description: '', category: CategoryEnum.Laptops, price: 999, isAvailable: false, },
      { id: 5, name: 'MacBook Pro M1 2020', description: '', category: CategoryEnum.Laptops, price: 1199, isAvailable: true, },
    ];

    return Promise.resolve(productList);
  }
}

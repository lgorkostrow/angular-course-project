import {BaseRepository} from "../../core/services/base.repository";
import {ProductModel} from "../models/product.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductRepository extends BaseRepository {
  constructor(httClient: HttpClient) {
    super(httClient);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.sendGet<ProductModel[]>('/api/products');
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.sendGet<ProductModel>(`/api/products/${id}`);
  }
}

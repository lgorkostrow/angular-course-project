import {BaseRepository} from "../../core/services/base.repository";
import {ProductModel} from "../models/product.model";
import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Environment} from "../../core/models/environment";
import {ENV_TOKEN} from "../../app.module";
import {delay} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ProductRepository extends BaseRepository {
  constructor(
    @Inject(ENV_TOKEN) env: Environment,
    httClient: HttpClient,
  ) {
    super(env.apiUrl!, httClient);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.sendGet<ProductModel[]>('/products')
      .pipe(delay(500));
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.sendGet<ProductModel>(`/products/${id}`)
      .pipe(delay(500));
  }
}

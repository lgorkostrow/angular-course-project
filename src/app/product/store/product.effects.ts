import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";
import {ProductRepository} from "../services/product.repository";
import {ProductModel} from "../models/product.model";
import {fetchProduct, fetchProducts, setProduct, setProducts} from "./product.actions";

@Injectable()
export class ProductEffects {
  fetchProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProducts),
      switchMap(() => this.productRepository.getProducts()),
      map((products: ProductModel[]) => setProducts({products})),
    );
  });

  fetchProduct = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProduct),
      switchMap((data) => {
        return this.productRepository.getProduct(data.productId);
      }),
      map((product: ProductModel) => setProduct({product})),
    );
  });

  constructor(private actions$: Actions, private productRepository: ProductRepository) {}
}

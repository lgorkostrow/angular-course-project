import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FetchProductAction,
  SetProductAction,
  SetProductsAction
} from "./product.actions";
import {map, switchMap} from "rxjs/operators";
import {ProductRepository} from "../services/product.repository";
import {ProductModel} from "../models/product.model";

@Injectable()
export class ProductEffects {
  fetchProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_PRODUCTS),
      switchMap(() => this.productRepository.getProducts()),
      map((products: ProductModel[]) => new SetProductsAction(products)),
    );
  });

  fetchProduct = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_PRODUCT),
      switchMap((data: FetchProductAction) => {
        return this.productRepository.getProduct(data.payload);
      }),
      map((product: ProductModel) => new SetProductAction(product)),
    );
  });

  constructor(private actions$: Actions, private productRepository: ProductRepository) {}
}

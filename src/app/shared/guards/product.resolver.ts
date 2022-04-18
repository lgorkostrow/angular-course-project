import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ProductModel} from "../../product/models/product.model";
import {ProductRepository} from "../../product/services/product.repository";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

export function resolveProductWithRedirect(redirectUrl: string) {
  return {data: {redirectUrl}, resolve: {product: ProductResolver}};
}

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productRepository: ProductRepository) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    return this.productRepository.getProduct(+route.params['productID']);
  }
}

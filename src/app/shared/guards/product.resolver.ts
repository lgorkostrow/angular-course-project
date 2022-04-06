import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ProductModel} from "../../product/models/product.model";
import {ProductRepository} from "../../product/services/product.repository";
import {Injectable} from "@angular/core";

export function resolveProductWithRedirect(redirectUrl: string) {
  return { data: { redirectUrl }, resolve: { product: ProductResolver }};
}

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductModel | null> {
  constructor(private productRepository: ProductRepository, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProductModel | null> {
    const product = await this.productRepository.getProduct(+route.params['productID']);
    if (product) {
      return product;
    }

    this.router.navigate([route.data.redirectUrl]);

    return null;
  }
}
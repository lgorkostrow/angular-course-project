import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {CartService} from "../../cart/services/cart.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class IsEmptyCartGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.cartService.isEmptyCart()) {
      return true;
    }

    this.router.navigateByUrl('/products');

    return false;
  }
}

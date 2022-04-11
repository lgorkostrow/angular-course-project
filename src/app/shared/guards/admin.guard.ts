import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {ConfigService} from "../../core/services/config.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(private configService: ConfigService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.configService.isCurrentUserAdmin()) {
      return true;
    }

    return this.router.parseUrl('/page-not-found');
  }
}

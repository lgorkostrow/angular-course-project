import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {ConfigService} from "../../core/services/config.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(private configService: ConfigService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.configService.isCurrentUserAdmin()) {
      return true;
    }

    this.router.navigateByUrl('/page-not-found');

    return false;
  }
}

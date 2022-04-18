import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError, concat, delay, map, retry, retryWhen, share, take, timeInterval} from "rxjs/operators";
import {SnackbarService} from "./snackbar.service";
import {Injectable} from "@angular/core";
import {Location} from "@angular/common";
import {ConfigService} from "./config.service";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private snackbarService: SnackbarService,
    private configService: ConfigService,
    private location: Location,
    private router: Router,
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        share(),
        retryWhen(errors => {
          let count = 0;

          return errors.pipe(
            delay(100),
            map(error => {
              if (count++ === this.configService.getConfig().retryCount) {
                throw error;
              }
              return error;
            }),
          )
        }),
        catchError((error: HttpErrorResponse) => {
          this.snackbarService.error(error.message);

          switch (error.status) {
            case 404:
              setTimeout(() => {this.location.back()}, 1000);
              break;
            default:
              setTimeout(() => {this.router.navigate(['/'])});
          }

          return EMPTY;
        }),
      );
  }
}

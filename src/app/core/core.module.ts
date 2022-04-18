import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionStorageService, StorageService} from "./services/storage.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpErrorInterceptor} from "./services/http-error.interceptor";
import {TimingInterceptor} from "./services/timing.interceptor";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: SessionStorageService, useValue: new StorageService(window.sessionStorage)},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
  ],
})
export class CoreModule {}

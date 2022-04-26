import {DEFAULT_CURRENCY_CODE, InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";
import {CoreModule} from "./core/core.module";
import {LocalStorageService, StorageService} from "./core/services/storage.service";
import {APP_CONFIG, APP_DI_CONFIG} from "./core/services/constant.service";
import {SESSION_ID, GeneratorFactory} from "./core/services/generator.factory";
import {GeneratorService} from "./core/services/generator.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {OrderModule} from "./order/order.module";
import {AdminModule} from "./admin/admin.module";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Environment} from "./core/models/environment";
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./store/app.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./product/store/product.effects";
import {CartEffects} from "./cart/store/cart.effects";

export const ENV_TOKEN = new InjectionToken<Environment>(
  'app.environment.token'
);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductModule,
    CartModule,
    OrderModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductEffects, CartEffects])
  ],
  providers: [
    {provide: LocalStorageService, useValue: new StorageService(window.localStorage)},
    {provide: APP_CONFIG, useValue: APP_DI_CONFIG},
    {provide: SESSION_ID, useFactory: GeneratorFactory(20), deps: [GeneratorService]},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'},
    {provide: ENV_TOKEN, useFactory: () => environment},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

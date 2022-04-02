import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";
import {CoreModule} from "./core/core.module";
import {ProductRepository} from "./product/services/product.repository";
import {CartService} from "./cart/services/cart.service";
import {LocalStorageService, StorageService} from "./core/services/storage.service";
import {APP_CONFIG, APP_DI_CONFIG} from "./core/services/constant.service";
import {ConfigService} from "./core/services/config.service";
import {SESSION_ID, GeneratorFactory} from "./core/services/generator.factory";
import {GeneratorService} from "./core/services/generator.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductModule,
    CartModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {provide: LocalStorageService, useValue: new StorageService(window.localStorage)},
    {provide: APP_CONFIG, useValue: APP_DI_CONFIG},
    {provide: SESSION_ID, useFactory: GeneratorFactory(20), deps: [GeneratorService]},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";
import {CoreModule} from "./core/core.module";

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

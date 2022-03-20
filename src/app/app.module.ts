import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product/components/product-list-component/product-list-component.component';
import { ProductItemComponentComponent } from './product/components/product-item-component/product-item-component.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    ProductItemComponentComponent,
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

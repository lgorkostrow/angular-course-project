import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from "./components/cart-list/cart-list.component";
import {CartItemComponent} from "./components/cart-item/cart-item.component";
import { CartComponent } from './components/cart/cart.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent,
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }

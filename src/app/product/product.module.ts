import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./components/product-list-component/product-list.component";
import {ProductItemComponent} from "./components/product-item-component/product-item.component";
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductComponent,
  ],
  exports: [
    ProductComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponentComponent} from "./components/product-list-component/product-list-component.component";
import {ProductItemComponentComponent} from "./components/product-item-component/product-item-component.component";
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductListComponentComponent,
    ProductItemComponentComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponentComponent} from "./components/product-list-component/product-list-component.component";
import {ProductItemComponentComponent} from "./components/product-item-component/product-item-component.component";
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    // поправьте на следующей итерации названия этих компонентов, уберите лишний суффикс Component
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

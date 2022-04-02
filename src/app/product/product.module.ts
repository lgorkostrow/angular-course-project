import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./components/product-list-component/product-list.component";
import {ProductItemComponent} from "./components/product-item-component/product-item.component";
import { ProductComponent } from './components/product/product.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexModule} from "@angular/flex-layout";

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
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexModule
  ]
})
export class ProductModule { }

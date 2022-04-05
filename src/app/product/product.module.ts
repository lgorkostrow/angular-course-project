import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexModule} from "@angular/flex-layout";
import {ProductRoutingModule} from "./product-routing.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
import {ProductListComponent} from "./components/product-list-page/product-list/product-list.component";
import {ProductItemComponent} from "./components/product-list-page/product-item/product-item.component";
import {ProductViewPageComponent} from "./components/product-view-page/product-view-page.component";
import { ProductCardComponent } from './components/product-view-page/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductComponent,
    ProductViewPageComponent,
    ProductListPageComponent,
    ProductCardComponent,
  ],
  exports: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexModule,
    MatSnackBarModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }

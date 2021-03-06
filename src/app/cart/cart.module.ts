import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from "./components/cart-list/cart-list.component";
import { CartComponent } from './components/cart/cart.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {CartRoutingModule} from "./cart-routing.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    CartListComponent,
    CartComponent,
  ],
  exports: [
    CartComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    CartRoutingModule,
  ]
})
export class CartModule { }

import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductRepository} from "../../services/product.repository";
import {CartService} from "../../../cart/services/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarService} from "../../../core/services/snackbar.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: ProductModel[] = [];

  constructor(
    protected productRepository: ProductRepository,
    protected cartService: CartService,
    protected snackbarService: SnackbarService,
  ) { }

  addProductToCart(item: ProductModel): void {
    this.cartService.addItemToCart(item);
    this.snackbarService.open('Product Added');
  }
}

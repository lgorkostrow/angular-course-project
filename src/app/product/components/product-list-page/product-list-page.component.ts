import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductRepository} from "../../services/product.repository";
import {CartService} from "../../../cart/services/cart.service";
import {SnackbarService} from "../../../core/services/snackbar.service";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent extends ProductComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(
    productRepository: ProductRepository,
    cartService: CartService,
    snackbarService: SnackbarService,
  ) {
    super(productRepository, cartService, snackbarService);
  }

  async ngOnInit(): Promise<void> {
    this.products = await this.productRepository.getProducts();
  }

  onBuy(item: ProductModel): void {
    this.addProductToCart(item);
  }
}

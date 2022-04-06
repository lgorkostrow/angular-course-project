import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductRepository} from "../../services/product.repository";
import {ActivatedRoute, Data} from "@angular/router";
import {CartService} from "../../../cart/services/cart.service";
import {ProductComponent} from "../product/product.component";
import {SnackbarService} from "../../../core/services/snackbar.service";

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent extends ProductComponent implements OnInit {
  product!: ProductModel;

  constructor(
    productRepository: ProductRepository,
    cartService: CartService,
    snackbarService: SnackbarService,
    private route: ActivatedRoute,
  ) {
    super(productRepository, cartService, snackbarService);
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.product = data['product'];
    });
  }

  onBuy(product: ProductModel) {
    this.addProductToCart(product);
  }
}

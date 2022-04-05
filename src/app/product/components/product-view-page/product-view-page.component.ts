import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductRepository} from "../../services/product.repository";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
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
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super(productRepository, cartService, snackbarService);
  }

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel | undefined) => {
        if (product === undefined) {
          this.router.navigate(['/page-not-found']);

          return;
        }

        this.product = product;
      },
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productRepository.getProduct(+params.get('productID')!)),
      )
      .subscribe(observer);
  }

  onBuy(product: ProductModel) {
    this.addProductToCart(product);
  }
}

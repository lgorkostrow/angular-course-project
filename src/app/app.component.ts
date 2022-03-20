import {Component, OnInit} from '@angular/core';
import {ProductRepository} from "./product/services/product-repository";
import {CartService} from "./cart/services/cart-service";
import {ProductModel} from "./product/models/product-model";
import {CartItemModel} from "./cart/models/cart-item-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ProductRepository,
    CartService,
  ],
})
export class AppComponent implements OnInit {
  public products: ProductModel[] = [];

  get cartItems(): CartItemModel[] {
    return this.cartService.items;
  }

  get cartTotalSum(): number {
    return this.cartService.totalSum;
  }

  get cartTotalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  constructor(
    private productRepository: ProductRepository,
    private cartService: CartService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.products = await this.productRepository.getProducts();
  }

  public onAddItemToCart(item: ProductModel): void {
    this.cartService.addItemToCart(item);
  }

  public onIncreaseCartItem(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  public onDecreaseCartItem(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }

  public onDeleteCartItem(productId: number): void {
    this.cartService.deleteItem(productId);
  }
}

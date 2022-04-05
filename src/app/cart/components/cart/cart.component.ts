import { Component, OnInit } from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  get cartItems(): CartItemModel[] {
    return this.cartService.items;
  }

  get cartTotalSum(): number {
    return this.cartService.totalSum;
  }

  get cartTotalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get isEmptyCart(): boolean {
    return this.cartService.isEmptyCart();
  }

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  onIncreaseCartItem(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  onDecreaseCartItem(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }

  onDeleteCartItem(productId: number): void {
    this.cartService.deleteItem(productId);
  }
}

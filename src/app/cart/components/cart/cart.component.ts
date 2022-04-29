import {Component, OnInit} from '@angular/core';
import {CartFacade} from "../../services/cart.facade";
import {OrderFacade} from "../../../order/services/order.facade";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = this.cartFacade.cartItems;
  cartTotalSum = this.cartFacade.cartTotalSum;
  cartTotalQuantity = this.cartFacade.cartTotalQuantity;
  isEmptyCart = this.cartFacade.isEmptyCart;

  constructor(
    private cartFacade: CartFacade,
    private orderFacade: OrderFacade,
  ) { }

  ngOnInit(): void {
    this.cartFacade.loadCart();
  }

  onIncreaseCartItem(productId: number): void {
    this.cartFacade.increaseQuantity(productId);
  }

  onDecreaseCartItem(productId: number): void {
    this.cartFacade.decreaseQuantity(productId);
  }

  onDeleteCartItem(productId: number): void {
    this.cartFacade.deleteCartItem(productId);
  }

  onOrder(): void {
    this.orderFacade.createOrder();
  }
}

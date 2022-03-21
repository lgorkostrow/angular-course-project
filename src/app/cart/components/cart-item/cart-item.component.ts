import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from "../../models/cart-item-model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() public item!: CartItemModel;

  @Output() public increaseCartItem = new EventEmitter<number>();
  @Output() public decreaseCartItem = new EventEmitter<number>();
  @Output() public deleteCartItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public onIncrease(productId: number): void {
    this.increaseCartItem.emit(productId);
  }

  public onDecrease(productId: number): void {
    this.decreaseCartItem.emit(productId);
  }

  public onDelete(productId: number): void {
    this.deleteCartItem.emit(productId);
  }
}

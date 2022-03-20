import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from "../../models/cart-item-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() public items: CartItemModel[] = [];
  @Input() public totalSum: number = 0;
  @Input() public totalQuantity: number = 0;

  @Output() public increaseCartItem = new EventEmitter<number>();
  @Output() public decreaseCartItem = new EventEmitter<number>();
  @Output() public deleteCartItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public onIncrease(cartItemId: number): void {
    this.increaseCartItem.emit(cartItemId);
  }

  public onDecrease(cartItemId: number): void {
    this.decreaseCartItem.emit(cartItemId);
  }

  public onDelete(cartItemId: number): void {
    this.deleteCartItem.emit(cartItemId);
  }
}

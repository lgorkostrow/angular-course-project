import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  IterableDiffers,
  OnInit,
  Output,
} from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";
import {Sort} from "@angular/material/sort";
import {OrderByPipe} from "../../../shared/pipes/order-by.pipe";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {
  @Input() items: CartItemModel[] = [];
  @Input() totalSum = 0;
  @Input() totalQuantity = 0;

  @Output() increaseCartItem = new EventEmitter<CartItemModel['id']>();
  @Output() decreaseCartItem = new EventEmitter<CartItemModel['id']>();
  @Output() deleteCartItem = new EventEmitter<CartItemModel['id']>();

  displayedColumns = ['name', 'quantity', 'price', 'totalPrice', 'actions'];
  dataSource = new MatTableDataSource<CartItemModel>();

  constructor(
    private orderByPipe: OrderByPipe,
    private differs: IterableDiffers
  ) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.items;
  }

  ngDoCheck() {
    if (this.differs.find(this.items)) {
      this.dataSource.data = this.items;
    }
  }

  onIncrease(cartItemId: number): void {
    this.increaseCartItem.emit(cartItemId);
  }

  onDecrease(cartItemId: number): void {
    this.decreaseCartItem.emit(cartItemId);
  }

  onDelete(cartItemId: number): void {
    this.deleteCartItem.emit(cartItemId);
  }

  onSortChange(sort: Sort): void {
    this.dataSource.data = this.orderByPipe.transform(this.items, sort.active, sort.direction === 'asc');
  }
}

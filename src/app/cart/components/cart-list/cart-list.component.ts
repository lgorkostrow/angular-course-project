import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  IterableDiffers, OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";
import {Sort} from "@angular/material/sort";
import {OrderByPipe} from "../../../shared/pipes/order-by.pipe";
import {MatTableDataSource} from "@angular/material/table";
import {Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy, DoCheck {
  @Input('items') items$: Observable<CartItemModel[]> = of([]);
  @Input() totalSum: Observable<number> = of(0);
  @Input() totalQuantity: Observable<number> = of(0);

  @Output() increaseCartItem = new EventEmitter<CartItemModel['id']>();
  @Output() decreaseCartItem = new EventEmitter<CartItemModel['id']>();
  @Output() deleteCartItem = new EventEmitter<CartItemModel['id']>();

  displayedColumns = ['name', 'quantity', 'price', 'totalPrice', 'actions'];
  dataSource = new MatTableDataSource<CartItemModel>();
  items: CartItemModel[] = [];

  private subscription!: Subscription;

  constructor(
    private orderByPipe: OrderByPipe,
    private differs: IterableDiffers
  ) {}

  ngOnInit(): void {
    this.subscription = this.items$.subscribe((items) => {
      this.items = [...items];
      this.dataSource.data = this.items;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

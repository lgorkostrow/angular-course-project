import {Component, Input, OnInit} from '@angular/core';
import {CartItemModel} from "../models/cart-item-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() public items: CartItemModel[] = [];
  @Input() public total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

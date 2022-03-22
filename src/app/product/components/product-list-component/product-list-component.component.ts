import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product-model";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss'],
})
export class ProductListComponentComponent implements OnInit {
  @Input() products: ProductModel[] = [];
  @Output() addItemToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {

  }

  onAddItemToCart(item: ProductModel): void {
    this.addItemToCart.emit(item);
  }
}

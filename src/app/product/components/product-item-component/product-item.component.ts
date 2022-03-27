import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-item-component',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() addItemToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(product: ProductModel): void {
    this.addItemToCart.emit(product);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: ProductModel;
  @Output() addItemToCart = new EventEmitter<ProductModel>();

  onBuy(product: ProductModel): void {
    this.addItemToCart.emit(product);
  }
}

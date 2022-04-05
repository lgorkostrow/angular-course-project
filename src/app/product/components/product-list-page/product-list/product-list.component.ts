import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: ProductModel[] = [];
  @Output() addItemToCart = new EventEmitter<ProductModel>();

  onBuy(product: ProductModel): void {
    this.addItemToCart.emit(product);
  }
}

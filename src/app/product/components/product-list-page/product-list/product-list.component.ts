import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "../../../models/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products!: Observable<ProductModel[]>;
  @Output() addItemToCart = new EventEmitter<ProductModel>();

  onBuy(product: ProductModel): void {
    this.addItemToCart.emit(product);
  }
}

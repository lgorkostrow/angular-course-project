import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductRepository} from "./product/services/product-repository";
import {CartService} from "./cart/services/cart-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ProductRepository,
    CartService,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') public title!: ElementRef<HTMLHeadingElement>;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'Test title';
  }
}

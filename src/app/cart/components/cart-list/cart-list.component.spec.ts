import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CartListComponent} from "./cart-list.component";
import {OrderByPipe} from "../../../shared/pipes/order-by.pipe";
import {of} from "rxjs";
import {CartItemModel} from "../../models/cart-item.model";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

  const cartItem: CartItemModel = {
    id: 1,
    name: 'Lenovo ThinkPad x1 Carbon',
    quantity: 1,
    price: 1899.99,
    totalPrice: 1899.99
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartListComponent],
      imports: [
        RouterModule,
        MatTableModule,
        MatIconModule,
      ],
      providers: [
        OrderByPipe,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should output totalQuantity from input variable', () => {
      // Arrange
      const totalQuantity = 5;
      component.totalQuantity = of(totalQuantity);
      component.items$ = of([cartItem]);

      // Act
      fixture.detectChanges();

      // Assert
      const htmlElement: HTMLElement = fixture.nativeElement;
      const th = htmlElement.querySelector('#total-quantity');
      const b = th!.getElementsByTagName('b')[0];

      expect(b.textContent).toEqual(totalQuantity.toString());
    });

    it('should output totalSum from input variable', () => {
      // Arrange
      const totalSum = 399.99;
      component.totalSum = of(totalSum);
      component.items$ = of([cartItem]);

      // Act
      fixture.detectChanges();

      // Assert
      const htmlElement: HTMLElement = fixture.nativeElement;
      const th = htmlElement.querySelector('#total-sum');
      const b = th!.getElementsByTagName('b')[0];

      expect(b.textContent).toEqual('$' + totalSum);
    });
  });
});

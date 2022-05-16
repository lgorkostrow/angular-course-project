import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductViewPageComponent} from "./product-view-page.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {CategoryEnum, ProductModel} from "../../models/product.model";
import {of} from "rxjs";
import {addProduct} from "../../../cart/store/cart.actions";

describe('ProductViewPageComponent', () => {
  let component: ProductViewPageComponent;
  let fixture: ComponentFixture<ProductViewPageComponent>;
  let mockStore: Store<AppState>;

  const productModel: ProductModel = {
    id: 1,
    isAvailable: true,
    name: 'Test',
    description: 'Test',
    category: CategoryEnum.Laptops,
    price: 10.99,
  };

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj(['select', 'dispatch']);

    await TestBed.configureTestingModule({
      declarations: [ ProductViewPageComponent ],
      providers: [
        {provide: Store, useValue: mockStore}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should select observable product', () => {
      // Arrange
      mockStore.select = jasmine.createSpy().and.returnValue(of(productModel));

      // Act
      component.ngOnInit();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      expect(component.product).toBeDefined();
    });

    it('should select observable showProgress', () => {
      // Arrange
      mockStore.select = jasmine.createSpy().and.returnValue(of([false]));

      // Act
      component.ngOnInit();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      expect(component.showProgress).toBeDefined();
    });
  });

  it('should dispatch an action on product buying', () => {
    // Act
    component.onBuy(productModel);

    // Assert
    expect(mockStore.dispatch).toHaveBeenCalledWith(addProduct({product: productModel}));
  });
});

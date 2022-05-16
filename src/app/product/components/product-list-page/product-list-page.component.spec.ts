import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPageComponent } from './product-list-page.component';
import {AppState} from "../../../store/app.reducer";
import {State, Store} from "@ngrx/store";
import {CategoryEnum, ProductModel} from "../../models/product.model";
import {addProduct} from "../../../cart/store/cart.actions";
import {fetchProducts} from "../../store/product.actions";
import {selectProductItems} from "../../../store/product.selectors";
import {of} from "rxjs";

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;
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
      declarations: [ ProductListPageComponent ],
      providers: [
        {provide: Store, useValue: mockStore}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch fetchProducts action', () => {
      // Act
      component.ngOnInit();

      // Assert
      expect(mockStore.dispatch).toHaveBeenCalledWith(fetchProducts());
    });

    it('should select observable products', () => {
      // Arrange
      mockStore.select = jasmine.createSpy().and.returnValue(of([productModel]));

      // Act
      component.ngOnInit();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      expect(component.products).toBeDefined();
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

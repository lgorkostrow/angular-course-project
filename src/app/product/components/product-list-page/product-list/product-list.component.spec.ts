import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {CategoryEnum, ProductModel} from "../../../models/product.model";

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on product buying', () => {
    // Arrange
    component.addItemToCart = jasmine.createSpyObj(['emit']);
    const productModel: ProductModel = {
      id: 1,
      isAvailable: true,
      name: 'Test',
      description: 'Test',
      category: CategoryEnum.Laptops,
      price: 10.99,
    };

    // Act
    component.onBuy(productModel);

    // Assert
    expect(component.addItemToCart.emit).toHaveBeenCalledWith(productModel);
  });
});

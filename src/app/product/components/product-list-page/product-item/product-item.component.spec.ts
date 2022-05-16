import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import {CategoryEnum, ProductModel} from "../../../models/product.model";

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  const productModel: ProductModel = {
    id: 1,
    isAvailable: true,
    name: 'Test',
    description: 'Test',
    category: CategoryEnum.Laptops,
    price: 10.99,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = productModel;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on product buying', () => {
    // Arrange
    component.addItemToCart = jasmine.createSpyObj(['emit']);

    // Act
    component.onBuy(productModel);

    // Assert
    expect(component.addItemToCart.emit).toHaveBeenCalledWith(productModel);
  });
});

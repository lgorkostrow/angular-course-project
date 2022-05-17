import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductCardComponent} from './product-card.component';
import {CategoryEnum, ProductModel} from "../../../models/product.model";

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
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
// Было бы хорошо увидеть еще хотя бы 1 тест интеграционный с шаблоном для проверки корректного отображения данных
// Больше замечаний нет

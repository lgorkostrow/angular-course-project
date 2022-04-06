import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductCreatePageComponent } from './admin-product-create-page.component';

describe('AdminProductCreatePageComponent', () => {
  let component: AdminProductCreatePageComponent;
  let fixture: ComponentFixture<AdminProductCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

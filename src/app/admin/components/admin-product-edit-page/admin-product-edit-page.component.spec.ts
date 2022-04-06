import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductEditPageComponent } from './admin-product-edit-page.component';

describe('AdminProductEditPageComponent', () => {
  let component: AdminProductEditPageComponent;
  let fixture: ComponentFixture<AdminProductEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

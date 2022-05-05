import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOrderPageComponent } from './process-order-page.component';

describe('ProcessOrderPageComponent', () => {
  let component: ProcessOrderPageComponent;
  let fixture: ComponentFixture<ProcessOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

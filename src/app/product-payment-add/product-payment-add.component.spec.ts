import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPaymentAddComponent } from './product-payment-add.component';

describe('ProductPaymentAddComponent', () => {
  let component: ProductPaymentAddComponent;
  let fixture: ComponentFixture<ProductPaymentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPaymentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPaymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

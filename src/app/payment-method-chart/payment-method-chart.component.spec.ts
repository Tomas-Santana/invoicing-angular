import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodChartComponent } from './payment-method-chart.component';

describe('PaymentMethodChartComponent', () => {
  let component: PaymentMethodChartComponent;
  let fixture: ComponentFixture<PaymentMethodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentMethodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

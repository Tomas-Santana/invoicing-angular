import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInvoiceComponent } from './full-invoice.component';

describe('FullInvoiceComponent', () => {
  let component: FullInvoiceComponent;
  let fixture: ComponentFixture<FullInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

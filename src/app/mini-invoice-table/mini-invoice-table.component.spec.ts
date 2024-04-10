import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniInvoiceTableComponent } from './mini-invoice-table.component';

describe('MiniInvoiceTableComponent', () => {
  let component: MiniInvoiceTableComponent;
  let fixture: ComponentFixture<MiniInvoiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniInvoiceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniInvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

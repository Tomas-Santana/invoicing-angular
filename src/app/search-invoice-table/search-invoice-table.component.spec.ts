import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInvoiceTableComponent } from './search-invoice-table.component';

describe('SearchInvoiceTableComponent', () => {
  let component: SearchInvoiceTableComponent;
  let fixture: ComponentFixture<SearchInvoiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInvoiceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

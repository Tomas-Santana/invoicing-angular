import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingSearchComponent } from './invoicing-search.component';

describe('InvoicingSearchComponent', () => {
  let component: InvoicingSearchComponent;
  let fixture: ComponentFixture<InvoicingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicingSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingViewComponent } from './invoicing-view.component';

describe('InvoicingViewComponent', () => {
  let component: InvoicingViewComponent;
  let fixture: ComponentFixture<InvoicingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

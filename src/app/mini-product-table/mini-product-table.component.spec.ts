import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProductTableComponent } from './mini-product-table.component';

describe('MiniProductTableComponent', () => {
  let component: MiniProductTableComponent;
  let fixture: ComponentFixture<MiniProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProductTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

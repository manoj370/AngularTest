import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdataComponent } from './productsdata.component';

describe('ProductsdataComponent', () => {
  let component: ProductsdataComponent;
  let fixture: ComponentFixture<ProductsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPopupComponent } from './add-product-popup.component';

describe('AddProductPopupComponent', () => {
  let component: AddProductPopupComponent;
  let fixture: ComponentFixture<AddProductPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductPopupComponent]
    });
    fixture = TestBed.createComponent(AddProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

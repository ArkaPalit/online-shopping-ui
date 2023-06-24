import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPopupComponent } from './edit-product-popup.component';

describe('EditProductPopupComponent', () => {
  let component: EditProductPopupComponent;
  let fixture: ComponentFixture<EditProductPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductPopupComponent]
    });
    fixture = TestBed.createComponent(EditProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

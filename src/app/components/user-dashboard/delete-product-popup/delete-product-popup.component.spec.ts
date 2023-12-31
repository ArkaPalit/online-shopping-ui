import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductPopupComponent } from './delete-product-popup.component';

describe('DeleteProductPopupComponent', () => {
  let component: DeleteProductPopupComponent;
  let fixture: ComponentFixture<DeleteProductPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProductPopupComponent]
    });
    fixture = TestBed.createComponent(DeleteProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

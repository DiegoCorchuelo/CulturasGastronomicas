import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestaurantsEditComponent } from './admin-restaurants-edit.component';

describe('AdminRestaurantsEditComponent', () => {
  let component: AdminRestaurantsEditComponent;
  let fixture: ComponentFixture<AdminRestaurantsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRestaurantsEditComponent]
    });
    fixture = TestBed.createComponent(AdminRestaurantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateUserComponent } from './add-update-user.component';

describe('AddUpdateUserComponent', () => {
  let component: AddUpdateUserComponent;
  let fixture: ComponentFixture<AddUpdateUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateUserComponent]
    });
    fixture = TestBed.createComponent(AddUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

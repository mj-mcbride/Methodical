import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesEmployeeComponent } from './add-sales-employee.component';

describe('AddSalesEmployeeComponent', () => {
  let component: AddSalesEmployeeComponent;
  let fixture: ComponentFixture<AddSalesEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalesEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

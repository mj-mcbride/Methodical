import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeesDeptComponent } from './view-employees-dept.component';

describe('ViewEmployeesDeptComponent', () => {
  let component: ViewEmployeesDeptComponent;
  let fixture: ComponentFixture<ViewEmployeesDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeesDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeesDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

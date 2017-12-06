import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectiveEmployeesComponent } from './prospective-employees.component';

describe('ProspectiveEmployeesComponent', () => {
  let component: ProspectiveEmployeesComponent;
  let fixture: ComponentFixture<ProspectiveEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectiveEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectiveEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

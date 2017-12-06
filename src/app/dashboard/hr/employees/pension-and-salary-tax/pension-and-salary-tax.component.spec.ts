import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionAndSalaryTaxComponent } from './pension-and-salary-tax.component';

describe('PensionAndSalaryTaxComponent', () => {
  let component: PensionAndSalaryTaxComponent;
  let fixture: ComponentFixture<PensionAndSalaryTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionAndSalaryTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionAndSalaryTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

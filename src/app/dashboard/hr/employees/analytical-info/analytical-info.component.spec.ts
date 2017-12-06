import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalInfoComponent } from './analytical-info.component';

describe('AnalyticalInfoComponent', () => {
  let component: AnalyticalInfoComponent;
  let fixture: ComponentFixture<AnalyticalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

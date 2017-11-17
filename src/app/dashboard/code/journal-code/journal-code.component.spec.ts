import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalCodeComponent } from './journal-code.component';

describe('JournalCodeComponent', () => {
  let component: JournalCodeComponent;
  let fixture: ComponentFixture<JournalCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

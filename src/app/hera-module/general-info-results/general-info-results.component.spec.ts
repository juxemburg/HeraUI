import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoResultsComponent } from './general-info-results.component';

describe('GeneralInfoResultsComponent', () => {
  let component: GeneralInfoResultsComponent;
  let fixture: ComponentFixture<GeneralInfoResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

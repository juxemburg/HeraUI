import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesSearchComponent } from './challenges-search.component';

describe('ChallengesSearchComponent', () => {
  let component: ChallengesSearchComponent;
  let fixture: ComponentFixture<ChallengesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

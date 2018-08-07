import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChallengeHistoryComponent } from './course-challenge-history.component';

describe('CourseChallengeHistoryComponent', () => {
  let component: CourseChallengeHistoryComponent;
  let fixture: ComponentFixture<CourseChallengeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChallengeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChallengeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

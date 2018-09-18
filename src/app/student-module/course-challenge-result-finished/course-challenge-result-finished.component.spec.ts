import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChallengeResultFinishedComponent } from './course-challenge-result-finished.component';

describe('CourseChallengeResultFinishedComponent', () => {
  let component: CourseChallengeResultFinishedComponent;
  let fixture: ComponentFixture<CourseChallengeResultFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChallengeResultFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChallengeResultFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

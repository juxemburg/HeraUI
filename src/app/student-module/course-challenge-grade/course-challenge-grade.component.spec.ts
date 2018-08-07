import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChallengeGradeComponent } from './course-challenge-grade.component';

describe('CourseChallengeGradeComponent', () => {
  let component: CourseChallengeGradeComponent;
  let fixture: ComponentFixture<CourseChallengeGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChallengeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChallengeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

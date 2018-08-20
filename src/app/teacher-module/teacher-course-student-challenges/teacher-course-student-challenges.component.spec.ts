import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseStudentChallengesComponent } from './teacher-course-student-challenges.component';

describe('TeacherCourseStudentChallengesComponent', () => {
  let component: TeacherCourseStudentChallengesComponent;
  let fixture: ComponentFixture<TeacherCourseStudentChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseStudentChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseStudentChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

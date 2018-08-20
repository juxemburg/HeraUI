import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseStudentChallengeComponent } from './teacher-course-student-challenge.component';

describe('TeacherCourseStudentChallengeComponent', () => {
  let component: TeacherCourseStudentChallengeComponent;
  let fixture: ComponentFixture<TeacherCourseStudentChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseStudentChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseStudentChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

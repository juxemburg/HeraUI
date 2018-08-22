import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseStudentValorationComponent } from './teacher-course-student-valoration.component';

describe('TeacherCourseStudentValorationComponent', () => {
  let component: TeacherCourseStudentValorationComponent;
  let fixture: ComponentFixture<TeacherCourseStudentValorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseStudentValorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseStudentValorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

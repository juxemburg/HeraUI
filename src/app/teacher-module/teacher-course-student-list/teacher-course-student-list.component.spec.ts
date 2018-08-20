import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseStudentListComponent } from './teacher-course-student-list.component';

describe('TeacherCourseStudentListComponent', () => {
  let component: TeacherCourseStudentListComponent;
  let fixture: ComponentFixture<TeacherCourseStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

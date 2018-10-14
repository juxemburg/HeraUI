import { TestBed, inject } from '@angular/core/testing';

import { TeacherCourseStudentService } from './teacher-course-student.service';

describe('TeacherCourseStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherCourseStudentService]
    });
  });

  it('should be created', inject([TeacherCourseStudentService], (service: TeacherCourseStudentService) => {
    expect(service).toBeTruthy();
  }));
});

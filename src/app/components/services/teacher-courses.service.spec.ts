import { TestBed, inject } from '@angular/core/testing';

import { TeacherCoursesService } from './teacher-courses.service';

describe('TeacherCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherCoursesService]
    });
  });

  it('should be created', inject([TeacherCoursesService], (service: TeacherCoursesService) => {
    expect(service).toBeTruthy();
  }));
});

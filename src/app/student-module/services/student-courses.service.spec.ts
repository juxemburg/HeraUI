import { TestBed, inject } from '@angular/core/testing';

import { StudentCoursesService } from './student-courses.service';

describe('StudentCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCoursesService]
    });
  });

  it('should be created', inject([StudentCoursesService], (service: StudentCoursesService) => {
    expect(service).toBeTruthy();
  }));
});

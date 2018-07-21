import { TestBed, inject } from '@angular/core/testing';

import { StudentCoursesManagerService } from './student-courses-manager.service';

describe('StudentCoursesManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCoursesManagerService]
    });
  });

  it('should be created', inject([StudentCoursesManagerService], (service: StudentCoursesManagerService) => {
    expect(service).toBeTruthy();
  }));
});

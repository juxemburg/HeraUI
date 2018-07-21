import { TestBed, inject } from '@angular/core/testing';

import { StudentCoursesSearchManagerService } from './student-courses-search-manager.service';

describe('StudentCoursesSearchManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCoursesSearchManagerService]
    });
  });

  it('should be created', inject([StudentCoursesSearchManagerService], (service: StudentCoursesSearchManagerService) => {
    expect(service).toBeTruthy();
  }));
});

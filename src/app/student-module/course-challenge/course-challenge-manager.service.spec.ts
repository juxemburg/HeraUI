import { TestBed, inject } from '@angular/core/testing';

import { CourseChallengeManagerService } from './course-challenge-manager.service';

describe('CourseChallengeManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseChallengeManagerService]
    });
  });

  it('should be created', inject([CourseChallengeManagerService], (service: CourseChallengeManagerService) => {
    expect(service).toBeTruthy();
  }));
});

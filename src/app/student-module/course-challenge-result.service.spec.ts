import { TestBed, inject } from '@angular/core/testing';

import { CourseChallengeResultService } from './course-challenge-result.service';

describe('CourseChallengeResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseChallengeResultService]
    });
  });

  it('should be created', inject([CourseChallengeResultService], (service: CourseChallengeResultService) => {
    expect(service).toBeTruthy();
  }));
});

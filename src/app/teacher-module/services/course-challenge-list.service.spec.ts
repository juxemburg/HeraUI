import { TestBed, inject } from '@angular/core/testing';

import { CourseChallengeListService } from './course-challenge-list.service';

describe('CourseChallengeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseChallengeListService]
    });
  });

  it('should be created', inject([CourseChallengeListService], (service: CourseChallengeListService) => {
    expect(service).toBeTruthy();
  }));
});

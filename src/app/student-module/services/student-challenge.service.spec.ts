import { TestBed, inject } from '@angular/core/testing';

import { StudentChallengeService } from './student-challenge.service';

describe('StudentChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentChallengeService]
    });
  });

  it('should be created', inject([StudentChallengeService], (service: StudentChallengeService) => {
    expect(service).toBeTruthy();
  }));
});

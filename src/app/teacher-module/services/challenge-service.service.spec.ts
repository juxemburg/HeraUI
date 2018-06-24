import { TestBed, inject } from '@angular/core/testing';

import { ChallengeServiceService } from './challenge-service.service';

describe('ChallengeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallengeServiceService]
    });
  });

  it('should be created', inject([ChallengeServiceService], (service: ChallengeServiceService) => {
    expect(service).toBeTruthy();
  }));
});

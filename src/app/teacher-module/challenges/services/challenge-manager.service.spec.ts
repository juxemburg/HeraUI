import { TestBed, inject } from '@angular/core/testing';

import { ChallengeManagerService } from './challenge-manager.service';

describe('ChallengeManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallengeManagerService]
    });
  });

  it('should be created', inject([ChallengeManagerService], (service: ChallengeManagerService) => {
    expect(service).toBeTruthy();
  }));
});

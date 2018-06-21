import { TestBed, inject } from '@angular/core/testing';

import { IsInRoleGuardService } from './is-in-role-guard.service';

describe('IsInRoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsInRoleGuardService]
    });
  });

  it('should be created', inject([IsInRoleGuardService], (service: IsInRoleGuardService) => {
    expect(service).toBeTruthy();
  }));
});

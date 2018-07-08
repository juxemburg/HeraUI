import { TestBed, inject } from '@angular/core/testing';

import { IsProfesorRoleGuardService } from './is-profesor-role-guard.service';

describe('IsProfesorRoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsProfesorRoleGuardService]
    });
  });

  it('should be created', inject([IsProfesorRoleGuardService], (service: IsProfesorRoleGuardService) => {
    expect(service).toBeTruthy();
  }));
});

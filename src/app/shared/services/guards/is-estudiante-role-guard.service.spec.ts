import { TestBed, inject } from '@angular/core/testing';

import { IsEstudianteRoleGuardService } from './is-estudiante-role-guard.service';

describe('IsEstudianteRoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsEstudianteRoleGuardService]
    });
  });

  it('should be created', inject([IsEstudianteRoleGuardService], (service: IsEstudianteRoleGuardService) => {
    expect(service).toBeTruthy();
  }));
});

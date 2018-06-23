import { TestBed, inject } from '@angular/core/testing';

import { RegisterTeacherService } from './register-teacher.service';

describe('RegisterTeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterTeacherService]
    });
  });

  it('should be created', inject([RegisterTeacherService], (service: RegisterTeacherService) => {
    expect(service).toBeTruthy();
  }));
});

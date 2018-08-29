import { TestBed, inject } from '@angular/core/testing';

import { NavbarMenuService } from './navbar-menu.service';

describe('NavbarMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarMenuService]
    });
  });

  it('should be created', inject([NavbarMenuService], (service: NavbarMenuService) => {
    expect(service).toBeTruthy();
  }));
});

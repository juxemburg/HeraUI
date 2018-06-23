import { TestBed, inject } from '@angular/core/testing';

import { NavbarPanelService } from './navbar-panel.service';

describe('NavbarPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarPanelService]
    });
  });

  it('should be created', inject([NavbarPanelService], (service: NavbarPanelService) => {
    expect(service).toBeTruthy();
  }));
});

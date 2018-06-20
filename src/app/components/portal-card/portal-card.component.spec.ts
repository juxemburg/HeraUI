import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCardComponent } from './portal-card.component';

describe('PortalCardComponent', () => {
  let component: PortalCardComponent;
  let fixture: ComponentFixture<PortalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

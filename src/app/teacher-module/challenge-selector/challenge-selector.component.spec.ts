import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeSelectorComponent } from './challenge-selector.component';

describe('ChallengeSelectorComponent', () => {
  let component: ChallengeSelectorComponent;
  let fixture: ComponentFixture<ChallengeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

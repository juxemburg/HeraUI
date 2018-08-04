import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChallengeComponent } from './course-challenge.component';

describe('CourseChallengeComponent', () => {
  let component: CourseChallengeComponent;
  let fixture: ComponentFixture<CourseChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

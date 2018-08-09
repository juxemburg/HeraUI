import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChallengeResultComponent } from './course-challenge-result.component';

describe('CourseChallengeResultComponent', () => {
  let component: CourseChallengeResultComponent;
  let fixture: ComponentFixture<CourseChallengeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChallengeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChallengeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

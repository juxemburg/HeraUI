import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseChallengeListItemComponent } from './teacher-course-challenge-list-item.component';

describe('TeacherCourseChallengeListItemComponent', () => {
  let component: TeacherCourseChallengeListItemComponent;
  let fixture: ComponentFixture<TeacherCourseChallengeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseChallengeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseChallengeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

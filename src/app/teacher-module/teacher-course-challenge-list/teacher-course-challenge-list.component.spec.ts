import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseChallengeListComponent } from './teacher-course-challenge-list.component';

describe('TeacherCourseChallengeListComponent', () => {
  let component: TeacherCourseChallengeListComponent;
  let fixture: ComponentFixture<TeacherCourseChallengeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseChallengeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseChallengeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseAddChallengeComponent } from './teacher-course-add-challenge.component';

describe('TeacherCourseAddChallengeComponent', () => {
  let component: TeacherCourseAddChallengeComponent;
  let fixture: ComponentFixture<TeacherCourseAddChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseAddChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseAddChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentTracesComponent } from './course-student-traces.component';

describe('CourseStudentTracesComponent', () => {
  let component: CourseStudentTracesComponent;
  let fixture: ComponentFixture<CourseStudentTracesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStudentTracesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStudentTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

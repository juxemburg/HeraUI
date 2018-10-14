import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseTracesComponent } from './teacher-course-traces.component';

describe('TeacherCourseTracesComponent', () => {
  let component: TeacherCourseTracesComponent;
  let fixture: ComponentFixture<TeacherCourseTracesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseTracesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

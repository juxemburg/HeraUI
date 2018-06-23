import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesSearchComponent } from './teacher-courses-search.component';

describe('TeacherCoursesSearchComponent', () => {
  let component: TeacherCoursesSearchComponent;
  let fixture: ComponentFixture<TeacherCoursesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCoursesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCoursesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

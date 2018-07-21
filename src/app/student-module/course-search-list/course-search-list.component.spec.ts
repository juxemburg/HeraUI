import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchListComponent } from './course-search-list.component';

describe('CourseSearchListComponent', () => {
  let component: CourseSearchListComponent;
  let fixture: ComponentFixture<CourseSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

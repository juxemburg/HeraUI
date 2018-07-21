import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchCardComponent } from './course-search-card.component';

describe('CourseSearchCardComponent', () => {
  let component: CourseSearchCardComponent;
  let fixture: ComponentFixture<CourseSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

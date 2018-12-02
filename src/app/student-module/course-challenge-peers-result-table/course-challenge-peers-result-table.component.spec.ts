import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChallengePeersResultTableComponent } from './course-challenge-peers-result-table.component';

describe('CourseChallengePeersResultTableComponent', () => {
  let component: CourseChallengePeersResultTableComponent;
  let fixture: ComponentFixture<CourseChallengePeersResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChallengePeersResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChallengePeersResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

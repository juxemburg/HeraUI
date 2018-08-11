import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelCarsComponent } from './parallel-cars.component';

describe('ParallelCarsComponent', () => {
  let component: ParallelCarsComponent;
  let fixture: ComponentFixture<ParallelCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

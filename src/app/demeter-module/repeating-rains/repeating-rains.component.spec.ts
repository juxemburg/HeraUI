import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingRainsComponent } from './repeating-rains.component';

describe('RepeatingRainsComponent', () => {
  let component: RepeatingRainsComponent;
  let fixture: ComponentFixture<RepeatingRainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatingRainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatingRainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

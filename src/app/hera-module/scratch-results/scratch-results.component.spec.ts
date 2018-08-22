import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchResultsComponent } from './scratch-results.component';

describe('ScratchResultsComponent', () => {
  let component: ScratchResultsComponent;
  let fixture: ComponentFixture<ScratchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

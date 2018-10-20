import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineTableComponent } from './multi-line-table.component';

describe('MultiLineTableComponent', () => {
  let component: MultiLineTableComponent;
  let fixture: ComponentFixture<MultiLineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLineTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

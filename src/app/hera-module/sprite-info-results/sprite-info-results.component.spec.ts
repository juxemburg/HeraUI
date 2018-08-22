import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteInfoResultsComponent } from './sprite-info-results.component';

describe('SpriteInfoResultsComponent', () => {
  let component: SpriteInfoResultsComponent;
  let fixture: ComponentFixture<SpriteInfoResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpriteInfoResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteInfoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

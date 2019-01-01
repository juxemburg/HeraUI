import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloningTroubleComponent } from './cloning-trouble.component';

describe('CloningTroubleComponent', () => {
  let component: CloningTroubleComponent;
  let fixture: ComponentFixture<CloningTroubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloningTroubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloningTroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

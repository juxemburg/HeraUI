import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChallengeFormComponent } from './create-challenge-form.component';

describe('CreateChallengeFormComponent', () => {
  let component: CreateChallengeFormComponent;
  let fixture: ComponentFixture<CreateChallengeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChallengeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChallengeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

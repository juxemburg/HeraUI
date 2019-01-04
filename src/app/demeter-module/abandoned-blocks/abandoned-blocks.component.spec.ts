import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedBlocksComponent } from './abandoned-blocks.component';

describe('AbandonedBlocksComponent', () => {
  let component: AbandonedBlocksComponent;
  let fixture: ComponentFixture<AbandonedBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbandonedBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHomeComponent } from './step-home.component';

describe('StepHomeComponent', () => {
  let component: StepHomeComponent;
  let fixture: ComponentFixture<StepHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

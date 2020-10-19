import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepTextComponent } from './first-step-text.component';

describe('FirstStepTextComponent', () => {
  let component: FirstStepTextComponent;
  let fixture: ComponentFixture<FirstStepTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStepTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

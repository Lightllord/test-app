import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStepSendingComponent } from './third-step-sending.component';

describe('ThirdStepSendingComponent', () => {
  let component: ThirdStepSendingComponent;
  let fixture: ComponentFixture<ThirdStepSendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdStepSendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdStepSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

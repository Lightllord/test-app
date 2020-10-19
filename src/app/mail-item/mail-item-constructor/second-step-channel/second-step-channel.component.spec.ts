import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepChannelComponent } from './second-step-channel.component';

describe('SecondStepChannelComponent', () => {
  let component: SecondStepChannelComponent;
  let fixture: ComponentFixture<SecondStepChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStepChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStepChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

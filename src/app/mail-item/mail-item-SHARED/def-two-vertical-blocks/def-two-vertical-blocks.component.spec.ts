import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefTwoVerticalBlocksComponent } from './def-two-vertical-blocks.component';

describe('DefTwoVerticalBlocksComponent', () => {
  let component: DefTwoVerticalBlocksComponent;
  let fixture: ComponentFixture<DefTwoVerticalBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefTwoVerticalBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefTwoVerticalBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailItemConstructorComponent } from './mail-item-constructor.component';

describe('MailItemConstructorComponent', () => {
  let component: MailItemConstructorComponent;
  let fixture: ComponentFixture<MailItemConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailItemConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailItemConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

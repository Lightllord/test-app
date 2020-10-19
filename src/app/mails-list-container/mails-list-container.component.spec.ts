import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsListContainerComponent } from './mails-list-container.component';

describe('MailsListContainerComponent', () => {
  let component: MailsListContainerComponent;
  let fixture: ComponentFixture<MailsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

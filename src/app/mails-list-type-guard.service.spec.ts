import { TestBed } from '@angular/core/testing';

import { MailsListTypeGuardService } from './mails-list-type-guard.service';

describe('MailsListTypeGuardService', () => {
  let service: MailsListTypeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailsListTypeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MailsListService } from './mails-list.service';

describe('MailsListService', () => {
  let service: MailsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

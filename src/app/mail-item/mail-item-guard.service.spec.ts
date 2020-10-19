import { TestBed } from '@angular/core/testing';

import { MailItemGuardService } from './mail-item-guard.service';

describe('MailItemGuardService', () => {
  let service: MailItemGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailItemGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

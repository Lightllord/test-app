import { TestBed } from '@angular/core/testing';

import { MailItemService } from './mail-item.service';

describe('MailItemService', () => {
  let service: MailItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

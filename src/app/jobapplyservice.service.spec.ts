import { TestBed } from '@angular/core/testing';

import { JobapplyserviceService } from './jobapplyservice.service';

describe('JobapplyserviceService', () => {
  let service: JobapplyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobapplyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

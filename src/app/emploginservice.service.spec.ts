import { TestBed } from '@angular/core/testing';

import { EmploginserviceService } from './emploginservice.service';

describe('EmploginserviceService', () => {
  let service: EmploginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

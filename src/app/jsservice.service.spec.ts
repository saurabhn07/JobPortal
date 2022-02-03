import { TestBed } from '@angular/core/testing';

import { JsserviceService } from './jsservice.service';

describe('JsserviceService', () => {
  let service: JsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

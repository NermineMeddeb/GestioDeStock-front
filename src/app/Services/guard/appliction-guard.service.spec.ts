import { TestBed } from '@angular/core/testing';

import { ApplictionGuardService } from './appliction-guard.service';

describe('ApplictionGuardService', () => {
  let service: ApplictionGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplictionGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

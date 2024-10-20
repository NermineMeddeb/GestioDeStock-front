import { TestBed } from '@angular/core/testing';

import { ApplicationGuardService } from './appliction-guard.service';

describe('ApplictionGuardService', () => {
  let service: ApplicationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

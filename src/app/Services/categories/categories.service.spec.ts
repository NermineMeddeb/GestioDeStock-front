import { TestBed } from '@angular/core/testing';

import {ApiService} from '../../../gs-api/src/./services/api.service';

describe('CategoriesService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



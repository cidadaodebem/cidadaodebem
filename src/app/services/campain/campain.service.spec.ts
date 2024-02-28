import { TestBed } from '@angular/core/testing';

import { CampainService } from './campain.service';

describe('CampainService', () => {
  let service: CampainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

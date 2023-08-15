import { TestBed } from '@angular/core/testing';

import { DzLibService } from './dz-lib.service';

describe('DzLibService', () => {
  let service: DzLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DzLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

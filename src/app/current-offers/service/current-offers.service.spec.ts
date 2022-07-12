import { TestBed } from '@angular/core/testing';

import { CurrentOffersService } from './current-offers.service';

describe('CurrentOffersService', () => {
  let service: CurrentOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TourdulichService } from './tourdulich.service';

describe('TourdulichService', () => {
  let service: TourdulichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourdulichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { TipServiceService } from './tip-service.service';

describe('TipServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipServiceService]
    });
  });

  it('should be created', inject([TipServiceService], (service: TipServiceService) => {
    expect(service).toBeTruthy();
  }));
});

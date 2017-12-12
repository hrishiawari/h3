import { TestBed, inject } from '@angular/core/testing';

import { GaurdserService } from './gaurdser.service';

describe('GaurdserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdserService]
    });
  });

  it('should be created', inject([GaurdserService], (service: GaurdserService) => {
    expect(service).toBeTruthy();
  }));
});

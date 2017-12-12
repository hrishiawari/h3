import { TestBed, inject } from '@angular/core/testing';

import { LoginlogoutService } from './loginlogout.service';

describe('LoginlogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginlogoutService]
    });
  });

  it('should be created', inject([LoginlogoutService], (service: LoginlogoutService) => {
    expect(service).toBeTruthy();
  }));
});

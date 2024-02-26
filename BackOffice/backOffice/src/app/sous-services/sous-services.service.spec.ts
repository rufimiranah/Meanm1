import { TestBed } from '@angular/core/testing';

import { SousServicesService } from './sous-services.service';

describe('SousServicesService', () => {
  let service: SousServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

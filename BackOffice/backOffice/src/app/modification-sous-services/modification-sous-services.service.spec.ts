import { TestBed } from '@angular/core/testing';

import { ModificationSousServicesService } from './modification-sous-services.service';

describe('ModificationSousServicesService', () => {
  let service: ModificationSousServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificationSousServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

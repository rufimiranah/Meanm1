import { TestBed } from '@angular/core/testing';

import { ModificationServiceService } from './modification-service.service';

describe('ModificationServiceService', () => {
  let service: ModificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

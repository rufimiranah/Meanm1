import { TestBed } from '@angular/core/testing';

import { ListeServicesService } from './liste-services.service';

describe('ListeServicesService', () => {
  let service: ListeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

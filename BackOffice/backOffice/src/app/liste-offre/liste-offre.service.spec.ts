import { TestBed } from '@angular/core/testing';

import { ListeOffreService } from './liste-offre.service';

describe('ListeOffreService', () => {
  let service: ListeOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

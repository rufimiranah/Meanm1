import { TestBed } from '@angular/core/testing';

import { ListeRdvEmployeService } from './liste-rdv-employe.service';

describe('ListeRdvEmployeService', () => {
  let service: ListeRdvEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeRdvEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

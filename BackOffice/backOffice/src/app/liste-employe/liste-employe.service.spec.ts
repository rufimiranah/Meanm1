import { TestBed } from '@angular/core/testing';

import { ListeEmployeService } from './liste-employe.service';

describe('ListeEmployeService', () => {
  let service: ListeEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

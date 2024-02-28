import { TestBed } from '@angular/core/testing';

import { ModificationHoraireService } from './modification-horaire.service';

describe('ModificationHoraireService', () => {
  let service: ModificationHoraireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificationHoraireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

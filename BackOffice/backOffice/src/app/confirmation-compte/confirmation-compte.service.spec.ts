import { TestBed } from '@angular/core/testing';

import { ConfirmationCompteService } from './confirmation-compte.service';

describe('ConfirmationCompteService', () => {
  let service: ConfirmationCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

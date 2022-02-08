import { TestBed } from '@angular/core/testing';

import { RegistrarProfesorServiceService } from './registrar-profesor-service.service';

describe('RegistrarProfesorServiceService', () => {
  let service: RegistrarProfesorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarProfesorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

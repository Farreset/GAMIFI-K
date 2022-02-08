import { TestBed } from '@angular/core/testing';

import { RegistrarProfesorService } from './registrar-profesor.service';

describe('RegistrarProfesorService', () => {
  let service: RegistrarProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

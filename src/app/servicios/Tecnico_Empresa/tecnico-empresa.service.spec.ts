import { TestBed } from '@angular/core/testing';

import { TecnicoEmpresaService } from './tecnico-empresa.service';

describe('TecnicoEmpresaService', () => {
  let service: TecnicoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

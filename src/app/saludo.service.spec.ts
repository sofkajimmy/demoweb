import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { SaludoService } from './saludo.service';

describe('SaludoService', () => {
  let service: SaludoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [SaludoService]
    });
    service = TestBed.inject(SaludoService);
  });

  it('should be created', () => {
    const service: SaludoService = TestBed.get(SaludoService);
    expect(service).toBeTruthy();
  });
});

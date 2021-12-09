import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor(private http:HttpClient) { }
  public saludar():Observable<String>{
    return this.http.get<string>("/api/v1/saludar");
  }
}

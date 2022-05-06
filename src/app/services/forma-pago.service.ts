import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormaPago } from '../models/formaPago';

@Injectable({
  providedIn: 'root',
})
export class FormaPagoService {
  baseUrl = environment.apiURL + '/formapago';
  constructor(private http: HttpClient) {}

  getFormasPago(): Observable<FormaPago[]> {
    return this.http.get<FormaPago[]>(this.baseUrl);
  }
}

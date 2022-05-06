import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = environment.apiURL + '/clientes';
  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }
}

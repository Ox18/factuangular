import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  baseUrl = environment.apiURL + '/roles';
  constructor(private http: HttpClient) {}

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.baseUrl);
  }
}

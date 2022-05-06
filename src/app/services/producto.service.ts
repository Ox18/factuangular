import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  baseUrl = environment.apiURL + '/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl);
  }
}

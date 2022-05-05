import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl = environment.apiURL + '/usuarios';
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  existUsername(username: string): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + '/check?username=' + username);
  }

  crearUsuario(body: UsuarioService.bodyCrearUsuario): Observable<void> {
    // post and remove cache
    return this.http.post<void>(this.baseUrl, body);
  }
}

export namespace UsuarioService {
  export interface bodyCrearUsuario {
    idRol: number;
    estado: number;
    username: string;
    password: string;
    nombres: string;
    apellidos: string;
  }
}

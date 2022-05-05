import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuariosLoading = false;
  usuariosError = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarios = [];
    this.usuariosError = false;
    this.usuariosLoading = true;

    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
        this.usuariosLoading = false;
      },
      (error) => {
        this.usuariosError = true;
        console.log(error);
      },
      () => {
        this.usuariosLoading = false;
      });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Rol } from '../models/rol';
import { RolService } from '../services/rol.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss'],
})
export class AddUsuarioComponent implements OnInit {
  roles: Rol[] = [];
  rolesLoading = false;
  rolesError = false;
  closeResult = '';
  loadingSubmit = false;
  usernameRepeated = false;
  estados = [
    {
      value: '0',
      nombre: 'Inactivo',
    },
    {
      value: '1',
      nombre: 'Activo',
    },
  ];
  checkoutForm;

  @Output() onSuccessForm = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private rolService: RolService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.checkoutForm = this.formBuilder.group({
      nombres: '',
      apellidos: '',
      username: '',
      password: '',
      idRol: '1',
      estado: '0',
    });
    this.onSuccessForm.emit(null);
  }

  ngOnInit(): void {
    this.getRoles();
  }

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getRoles() {
    this.roles = [];
    this.rolesError = false;
    this.rolesLoading = true;

    this.rolService.getRoles().subscribe(
      (rolesFromTheAPI: Rol[]) => {
        this.roles = rolesFromTheAPI;
      },
      (error) => {
        this.rolesError = true;
        console.log(error);
      },
      () => {
        this.rolesLoading = false;
      }
    );
  }

  onSubmit(customerData: any) {
    this.usuarioService.existUsername(customerData.username).subscribe(
      (exist: boolean) => {
        this.usernameRepeated = exist;

        if (!exist) {
          this.usuarioService.crearUsuario(customerData).subscribe(
            () => {
              this.loadingSubmit = false;
              this.checkoutForm.reset();
              this.modalService.dismissAll();
              this.checkoutForm.setControl('estado', new FormControl('0'));
              this.checkoutForm.setControl('idRol', new FormControl('1'));
            },
            (error) => {
              console.log(error);
            },
            () => {
              this.loadingSubmit = false;
            }
          );
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.loadingSubmit = false;
      }
    );
  }
}

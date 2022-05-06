import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CriteriaProductoByKeyword } from 'src/app/Criteria/CriteriaProductoByKeyword';
import { Cliente } from 'src/app/models/cliente';
import { FormaPago } from 'src/app/models/formaPago';
import { Producto } from 'src/app/models/producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormaPagoService } from 'src/app/services/forma-pago.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-comprobante-page',
  templateUrl: './comprobante-page.component.html',
  styleUrls: ['./comprobante-page.component.scss'],
})
export class ComprobantePageComponent implements OnInit {
  checkoutForm;
  direccion: string = '';
  clientes: {
    resources: Cliente[];
    loading: boolean;
    error: boolean;
  } = {
    resources: [],
    loading: false,
    error: false,
  };
  formasPago: {
    resources: FormaPago[];
    loading: boolean;
    error: boolean;
  } = {
    resources: [],
    loading: false,
    error: false,
  };
  productos: {
    resources: Producto[];
    loading: boolean;
    error: boolean;
  } = {
    resources: [],
    loading: false,
    error: false,
  };
  productosFiltrados: Array<{
    producto: Producto;
    cantidad: number;
  }> = [];

  closeResult = '';
  clienteIdSelected = 0;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private formaPagoService: FormaPagoService,
    private modalService: NgbModal,
    private productoService: ProductoService
  ) {
    this.checkoutForm = this.formBuilder.group({
      clienteId: '',
      direccion: '',
      fecha: new Date().toISOString().slice(0, 10),
    });
  }

  ngOnInit(): void {
    this.loadClientes();
    this.loadFormasPago();
    this.loadProductos();
  }

  loadClientes(): void {
    const onSuccess = (clientes: Cliente[]) => {
      this.clientes.resources = clientes;
    };
    const onError = (error: any) => {
      this.clientes.error = true;
    };
    const onComplete = () => {
      this.clientes.loading = false;
    };

    this.clienteService.getClientes().subscribe(onSuccess, onError, onComplete);
  }

  loadFormasPago(): void {
    const onSuccess = (formasPago: FormaPago[]) => {
      this.formasPago.resources = formasPago;
    };

    const onError = (_error: any) => {
      this.formasPago.error = true;
    };

    const onComplete = () => {
      this.formasPago.loading = false;
    };

    this.formaPagoService
      .getFormasPago()
      .subscribe(onSuccess, onError, onComplete);
  }

  loadProductos(): void {
    const onSuccess = (productos: Producto[]) => {
      this.productos.resources = productos;
      this.productosFiltrados = productos.map((producto: Producto) => ({
        cantidad: 0,
        producto,
      }));
    };

    const onError = (_error: any) => {
      this.productos.error = true;
    };

    const onComplete = () => {
      this.productos.loading = false;
    };

    this.productoService
      .getProductos()
      .subscribe(onSuccess, onError, onComplete);
  }

  public onChangeClienteSelect(clienteId: any): void {
    const cliente = this.clientes.resources.find(
      (cliente: Cliente) => cliente.id === Number(clienteId)
    );

    if (clienteId && cliente) {
      this.direccion = cliente.direccion;
    } else {
      this.direccion = '';
    }
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

  onChangeFilterInput(e: any): void {
    // filter by codigo and descripcion
    const keyword = e.target.value.toLowerCase();
    const productosFiltrados = CriteriaProductoByKeyword.meet(
      keyword,
      this.productos.resources
    );

    const productosFiltradosConvertidos = productosFiltrados.map(
      (producto: Producto) => ({
        cantidad: 0,
        producto,
      })
    );

    this.productosFiltrados = productosFiltradosConvertidos;
  }
}

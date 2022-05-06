export interface Producto {
  id?: number;
  descripcion: string;
  precio: number;
  codigo: string;
  stock: number;
  usuarioCreacion: number;
  fechaCreacion: Date;
  cantidad?: number;
}

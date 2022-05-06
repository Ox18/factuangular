import { Producto } from '../models/producto';

export class CriteriaProductoByKeyword {
  static meet(keyword: string, productos: Producto[]): Producto[] {
    return productos.filter((producto) => {
      return (
        producto.codigo.toLowerCase().includes(keyword.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(keyword.toLowerCase())
      );
    });
  }
}

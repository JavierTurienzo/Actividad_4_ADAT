export class Producto{
  id!: number
  nombre?: string
  cantidad?: number
  precio?: number
  categoria?: string

  constructor(nombre: string, cantidad: number, precio: number, categoria: string) {
    this.nombre = nombre
    this.cantidad = cantidad
    this.precio = precio
    this.categoria = categoria
  }
}

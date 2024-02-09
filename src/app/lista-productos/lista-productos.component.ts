import { Component } from '@angular/core';
import {ProductoService} from "../servicio/producto.service";
import {Producto} from "../modelo/Producto";
import {NgForOf, NgIf} from "@angular/common";
import {EditarProductoComponent} from "../editar-producto/editar-producto.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    NgForOf,
    EditarProductoComponent,
    NgIf
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[] = [];
  productoSeleccionado!: Producto;


  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.recuperarProductos();
  }

  recuperarProductos(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        this.productos = data; // Actualiza la lista de productos con la respuesta del servicio
      },
      (error) => {
        console.error('Error al recuperar productos', error);
      }
    );
  }

  editarProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  guardarEdicion(edicionProducto: Producto): void {
    // Llamada al servicio para actualizar el producto
    this.productoService.updateProducto(edicionProducto, this.productoSeleccionado.id).subscribe(
      () => {
        this.recuperarProductos(); // Actualiza la lista de productos después de la edición
        // this.productoSeleccionado = null; // Cierra el formulario de edición
      },
      (error) => {
        console.error('Error al actualizar el producto:', error);
      }
    );
  }

  borrarProducto(id: number): void {
    this.productoService.borrarProducto(id).subscribe(
      () => {
        // Actualiza la lista de productos después del borrado
        this.recuperarProductos();
      },
      (error) => {
        console.error('Error al borrar el producto:', error);
      }

    )
  }
}

import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Producto} from "../modelo/Producto";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  @Input() producto!: Producto; // Producto a editar
  @Output() guardarEdicion = new EventEmitter<Producto>(); // Emite evento al guardar edición

  formularioEdicion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioEdicion = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  ngOnChanges() {
    // Actualiza el formulario cuando cambia el producto a editar
    this.formularioEdicion.reset(this.producto);
  }

  guardar(): void {
    if (this.formularioEdicion.valid) {
      this.guardarEdicion.emit(this.formularioEdicion.value);
    }
  }
}

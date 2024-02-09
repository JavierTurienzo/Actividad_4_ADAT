import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../servicio/producto.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.css'
})
export class AddProductoComponent implements OnInit{

  productForm!: FormGroup

  constructor(
    public productoService: ProductoService,
    public fb: FormBuilder
  ){}

  addProducto() {

    this.productoService.addProducto(this.productForm.value).subscribe(
      response => {
        console.log(response)
      }
    )
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: ["", Validators.required],
      cantidad: ["", Validators.required],
      precio: ["", Validators.required],
      categoria: ["", Validators.required]
    })
  }
}

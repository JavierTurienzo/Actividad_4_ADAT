import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Producto} from "../modelo/Producto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlGlobal = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  // Crear Producto
  addProducto(producto: Producto): Observable<any>{
    return this.http.post<string>(this.urlGlobal + 'guardar', producto)
  }

  // Recuperar productos
  getProductos(): Observable<any>{
    return this.http.get<Producto[]>(this.urlGlobal + 'mostrar')
  }

  // Editar producto
  updateProducto(producto: Producto, idProducto: number): Observable<any>{
    return this.http.put<any>(`${this.urlGlobal}editar/${idProducto}`, producto);
  }

  // Eliminar producto *******NO FUNCIONA***********
  borrarProducto(idProducto: number){
    return this.http.delete<any>(`${this.urlGlobal}borrar/${idProducto}`);
  }
}

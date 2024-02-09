import { Routes } from '@angular/router';
import {AddProductoComponent} from "./add-producto/add-producto.component";
import {ListaProductosComponent} from "./lista-productos/lista-productos.component";

export const routes: Routes = [
  { path: 'add-producto', component: AddProductoComponent},
  { path: 'lista-productos', component: ListaProductosComponent}
];

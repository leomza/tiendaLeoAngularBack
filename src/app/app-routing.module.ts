import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './Pagina/categorias/categorias.component';
import { NuevaCategoriaComponent } from './Pagina/categorias/nueva-categoria/nueva-categoria.component';
import { HomeComponent } from './Pagina/home/home.component';
import { LoginComponent } from './Pagina/login/login.component';
import { NuevoProductoComponent } from './Pagina/productos/nuevo-producto/nuevo-producto.component';
import { ProductosComponent } from './Pagina/productos/productos.component';
import { NuevoUsuarioComponent } from './Pagina/usuarios/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './Pagina/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuariosComponent },
  { path: 'categoria', component: CategoriasComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'producto/nuevo', component: NuevoProductoComponent },
  { path: 'usuario/nueva', component: NuevoUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categoria/nuevaCate', component: NuevaCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

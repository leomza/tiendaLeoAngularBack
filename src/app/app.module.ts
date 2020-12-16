import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './Pagina/usuarios/usuarios.component';
import { HomeComponent } from './Pagina/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Parte-de-pagina/menu/menu.component';
import { CategoriasComponent } from './Pagina/categorias/categorias.component';
import { ProductosComponent } from './Pagina/productos/productos.component';
import { NuevoUsuarioComponent } from './Pagina/usuarios/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './Pagina/login/login.component';
import { NuevoProductoComponent } from './Pagina/productos/nuevo-producto/nuevo-producto.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NuevaCategoriaComponent } from './Pagina/categorias/nueva-categoria/nueva-categoria.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent,
    MenuComponent,
    CategoriasComponent,
    ProductosComponent,
    NuevoUsuarioComponent,
    LoginComponent,
    NuevoProductoComponent,
    NuevaCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxDatatableModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

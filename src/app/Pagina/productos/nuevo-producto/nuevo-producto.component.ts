import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Services/productos.service';
import { FileUploader } from 'ng2-file-upload';
import { CategoriasService } from 'src/app/Services/categorias.service';

const URL = 'http://localhost:3000/productos/upload';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'foto' });
  myForm: FormGroup;
  categorias=<any>[];

  constructor(private fb: FormBuilder, private ruta: Router, private prodServ: ProductosService, private catServ: CategoriasService) {
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
      sku: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      stock: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      imagen: ["", [Validators.nullValidator]]
    })
    
    //Para mostrar todas las categorias en el Select del HTML:
    this.catServ.mostrarTodas()
    .subscribe(data =>{
      this.categorias = data;
    })
  }

  crearProducto() {
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("onCompleteItem", item, status, response)
      const jsonResponse = JSON.parse(response);
      this.myForm.get('imagen').setValue(jsonResponse["data"])
      console.log(this.myForm.value)
      this.prodServ.nuevoProducto(this.myForm.value)
        .subscribe(data => {
          console.log("Data", data)
          if (data) {
            alert("Producto creado con exito");
            this.ruta.navigateByUrl("/producto");
          } else {
            alert(data["message"]);
          }
        },
          err => {
            console.log("Ocurrio un error", err);
            alert(err.error.mensaje);
          })
        }
        }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

}
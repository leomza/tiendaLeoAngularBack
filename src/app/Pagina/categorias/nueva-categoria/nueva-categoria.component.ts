import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/Services/categorias.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private ruta: Router, private catServ: CategoriasService) {
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
    })
  }

  crearCategoria() {
    console.log(this.myForm.value)
    this.catServ.nuevaCategoria(this.myForm.value)
      .subscribe(data => {
        console.log("Data", data)
        if (data) {
          alert("Categoria creada con exito");
          this.ruta.navigateByUrl("/categoria");
        } else {
          alert(data["message"]);
        }
      },
        err => {
          console.log("Ocurrio un error", err)
          alert(err.error.mensaje)
        })
  }
  ngOnInit(): void {
  }

}

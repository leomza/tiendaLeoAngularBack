import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder, private userServ: UsuariosService, private ruta : Router) {
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  crearUsuario() {
    console.log(this.myForm.value)
    this.userServ.nuevo(this.myForm.value)
      .subscribe(data => {
        console.log("Data", data)
        if (data) {
          alert("Usuario creado con exito");
          this.ruta.navigateByUrl("/usuario");
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

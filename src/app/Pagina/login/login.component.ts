import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { UsuarioBackLogin } from '../../Interfaces/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder, private userServ: UsuariosService, private ruta : Router) {
    this.myForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  login() {
    this.userServ.login(this.myForm.get('username').value, this.myForm.get('password').value)
      .subscribe((data : UsuarioBackLogin) => {
        console.log("Success", data)
        if (data.token) {
          alert("Login exitoso!");
          //Paso el token y cambio el estado a TRUE (estoy logueado):
          this.userServ.authenticate(data.token);
          this.ruta.navigateByUrl("/home");
        } else {
          alert(data["message"]);
        }
      },
        err => {
          console.log("Error", err)
        }
      )
  }

  ngOnInit(): void {
  }

}

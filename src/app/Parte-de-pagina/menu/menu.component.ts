import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logueado: boolean = false;

  constructor(private ruta: Router , private userServ : UsuariosService) {  this.userServ.isAuthenticate()
    .subscribe(login=>{
      console.log("Login", login);
      this.logueado=login;
    })
  }

  cerrarSesion(){
    this.userServ.logOut();
    alert("Sesion cerrada con exito!")
    this.ruta.navigateByUrl("/home");
  };

  ngOnInit(): void {
  }

}

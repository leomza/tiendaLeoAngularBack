import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Aca instancio el BehaviorSubject, si es TRUE estoy LOGUEADO, si es FALSE NO lo estoy
  estadoDeAutenticacion = new BehaviorSubject((localStorage.getItem("token")?true:false));

  constructor(private http: HttpClient) { }

 //A diferencia del metodo mostrarTodos() normal, este metodo le manda informacion a Express por query Strinng (era lo del "?info"):
 mostrarTodos(pageInfo=null){
  let query='';
  //PageInfo en offset recibe pagina -1, cuando consulta a express lo envia por query string
  if(pageInfo){
    query='?page='+(pageInfo["offset"]+1)
  }
  return this.http.get(environment.comienzoUrl+"usuariosWeb"+ query);
}
  nuevo(datos){
    return this.http.post(environment.comienzoUrl+"usuariosWeb/registro",datos)
  }
  login(username,password){
    return this.http.post(environment.comienzoUrl+"usuariosBackoffice/login", {username:username,password:password})
  }
  logOut(){
    localStorage.removeItem("token");
    this.estadoDeAutenticacion.next(false);
  }
  authenticate(token:string){
    localStorage.setItem("token",token);
    this.estadoDeAutenticacion.next(true);
  }
  //Devuelve el estado para que en el observable le pueda hacer un suscribe:
  isAuthenticate(){
    return this.estadoDeAutenticacion;
  }
  //Devuelve el estado, si es TRUE o FALSE
  isAuthenticated(){
    return this.estadoDeAutenticacion.value;
  }
  eliminarUsuario(id){
    return this.http.delete(environment.comienzoUrl+"usuariosWeb/"+id)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  mostrarTodas(){
    return this.http.get(environment.comienzoUrl+"categorias");
  }

  nuevaCategoria(datos){
    return this.http.post(environment.comienzoUrl+"categorias", datos, {
      headers:{
        "x-access-token": localStorage.getItem("token")
      }
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  //A diferencia del metodo mostrarTodos() normal, este metodo le manda informacion a Express por query Strinng (era lo del "?info"):
  mostrarTodos(pageInfo=null){
    let query='';
    //PageInfo en offset recibe pagina -1, cuando consulta a express lo envia por query string
    if(pageInfo){
      query='?page='+(pageInfo["offset"]+1)
    }
    return this.http.get(environment.comienzoUrl+"productos"+ query);
  }

  nuevoProducto(datos){
    return this.http.post(environment.comienzoUrl+"productos", datos)
  }

  eliminarProducto(id){
    return this.http.delete(environment.comienzoUrl+"productos/"+id)
  }
}


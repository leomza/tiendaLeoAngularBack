import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = [];
  rows = [];
  page={
    totalElements:0,
    pageNumber:0,
    size:0,
    };
  columns= [];

  constructor(private userServ: UsuariosService) { 
    //name: Es el nombre que tendra la columna / prop: Es el nombre del atributo que llega en el JSON:
    this.columns=[{ name: 'Nombre',prop:'nombre' }, { name: 'Apellido',prop:'apellido' }, { name: 'Telefono',prop:'telefono' }, 
                  { name: 'Email',prop:'email' }]
  };

  setPage(pageInfo){
    //Hacemos un llamado a mostrarTodos y le paso el querystring por parametro
    this.userServ.mostrarTodos(pageInfo).subscribe(data=>{
      console.log(data)
      //Registros de productos (Informacion)
      this.rows=data["docs"]
      console.log(this.rows)
      //Cantidad total de productos 
      this.page["totalElements"] = data["totalDocs"]
      //Cantidad de registros por pagina
      this.page["size"] = data["limit"]
      //La pagina que estoy consultando
      this.page["pageNumber"] = pageInfo["offset"]
      console.log(this.page)
    })
  }
  eliminar(id: string){
    console.log("El id es", id)
    this.userServ.eliminarUsuario(id).subscribe(data=>{
      console.log("Eliminar",data);
      this.setPage({ offset: 0 });
    })
  }
  ngOnInit(): void {
    //SetPage en base a una pagina consulta productos a express
    this.setPage({ offset: 0 });
  }

}

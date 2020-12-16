import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = [];
  rows = [];
  page={
    totalElements:0,
    pageNumber:0,
    size:0,
    };
  columns= [];

  constructor(private productService:ProductosService) { 
    //name: Es el nombre que tendra la columna / prop: Es el nombre del atributo que llega en el JSON:
    this.columns=[{ name: 'Nombre',prop:'nombre' }, { name: 'Sku',prop:'sku' }, { name: 'Precio',prop:'precio' }, 
                  { name: 'Descripcion',prop:'descripcion' }, { name: 'Stock',prop:'stock' }, { name: 'Categoria',prop:'categoria.nombre' }]
  };

  setPage(pageInfo){
    //Hacemos un llamado a mostrarTodos y le paso el querystring por parametro
    this.productService.mostrarTodos(pageInfo).subscribe(data=>{
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
    this.productService.eliminarProducto(id).subscribe(data=>{
      console.log("Eliminar",data);
      this.setPage({ offset: 0 });
    })
  }
  ngOnInit(): void {
    //SetPage en base a una pagina consulta productos a express
    this.setPage({ offset: 0 });
  }

}

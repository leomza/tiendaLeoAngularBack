import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Services/categorias.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  rows;

  ColumnMode = ColumnMode;

  constructor(private catServ: CategoriasService) {
    this.catServ.mostrarTodas()
    .subscribe(info => {
      this.rows = info;
    });
  }
}



/*

export class CategoriasComponent implements OnInit {

  categorias; 

constructor(private catServ: CategoriasService) {

  this.catServ.mostrarTodas()
    .subscribe(info => {
      console.log("Data", info)
      this.categorias = info;
    },
      err => {
        console.log("err", err)
      })
}

ngOnInit(): void {
}

}
*/
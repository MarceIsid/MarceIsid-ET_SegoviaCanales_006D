import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  asignatura={
    id: 0,
    nombre: "",
    imagen: "",
    profesor:""
  }


  constructor(
    private apicrud:  ApicrudService,
    private router: Router) {}
    
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAsignaturaById(this.getIdFromUrl());
  }

  // Volver a la página anterior
  volver() {
    this.router.navigate(['/tabs/tab1']);
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

getAsignaturaById(asignaturaId: number){
  this.apicrud.BuscarAsignaturaId(asignaturaId).subscribe(
    (resp:any)=>{
      this.asignatura={
        id: resp[0].id,
        nombre: resp[0].nombre,
        imagen: resp[0].imagen,
        profesor: resp[0].profesor
    }
  }
  )
}

eliminarAsignatura(){
  this.apicrud.EliminarAsignatura(this.asignatura).subscribe();
  this.router.navigateByUrl("listar");
}
}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Alumno } from 'src/interfaces/alumnos';
import { AlumnoService } from '../services/alumno.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  alumnos: Alumno[]=[];

  segment = 'scan';
  qrText='Ingrese nombre del ramo y su horario';

  constructor(private menucontroller:MenuController,private alumnoservice:AlumnoService) {}
  
  ngOnInit(){
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.alumnoservice.getAlumnos().subscribe(
      (data) => {
        this.alumnos=data;
      },
      (error) => {
        console.error('Error al cargar los alumnos', error);
      }
    );
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { Asignatura } from 'src/interfaces/Asignaturas';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  // Modelo para la nueva asignatura
  nuevaAsignatura: Asignatura = {
    id: 0,
    nombre: "",
    description: "",
    image: "",
    profesor: "",
    date: "",
  }

  constructor(private router: Router, 
              private apicrud: ApicrudService) {}

  ngOnInit()  {
  }

  crearAsignatura(){
    this.apicrud.postAsignatura(this.nuevaAsignatura).subscribe();
    this.router.navigate(['/asignatura']);
  }

  onSubmit() {
    // Aquí puedes manejar el envío del formulario y la imagen
    console.log('Datos enviados:', this.nuevaAsignatura);
  }
  volver() {
    this.router.navigate(['/asignatura']);
  }
}

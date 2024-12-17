import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { Asignaturas } from 'src/interfaces/Asignaturas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  asignaturas: Asignaturas[]=[]
 

  constructor(private apicrud: ApicrudService,
    private router: Router) { }

  ngOnInit() {
    this.getAsignaturas();
  }

  getAsignaturas() {
    this.apicrud.getAsignaturas().subscribe((data) => {
      this.asignaturas = data;  // Asignar los datos recibidos al array
    });
  }

  volver() {
    this.router.navigate(['/tabs/tab1']);
  }
}
  


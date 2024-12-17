import { Component } from '@angular/core';
import {register} from 'swiper/element/bundle';

interface Menu{
  icon:string;
  redirecTo: string;
  name:string;
}
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    
    {
      icon:'home-outline',
      redirecTo: '/tabs/tab1',
      name:'Inicio'
    },
    {
      icon:'file-tray-full-outline',
      redirecTo: '/tabs/tab3',
      name:'Asistencia'
    },
    {
      icon:'people-circle-outline',
      redirecTo: '/detalle',
      name:'Alumnos'
    },
    {
      icon:'finger-print-outline',
      redirecTo: '/detalle-profesor',
      name:'Mis Datos'
    },
    {
      icon:'log-out-outline',
      redirecTo: '/inicio',
      name:'Cerrar Sesión'
      },

  ]

  constructor() {}
}

import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

interface Menu{
  icon:string;
  redirecTo: string;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'color-wand-outline',
      redirecTo: '/tabs/tab1',
      name:'Inicio'
    },
    {
      icon:'calendar-outline',
      redirecTo: '/tabs/tab2',
      name:'Asistencia'
    },
    {
      icon:'alarm-outline',
      redirecTo: '/tabs/tab3',
      name:'Justificativo'
    },
    {
      icon:'person-circle-outline',
      redirecTo: '/tabs/tab4',
      name:'Perfil'
    },
    {
      icon:'alarm-outline',
      redirecTo: '/asignatura',
      name:'Asignatura'
    },

  ]


  constructor() {}
}

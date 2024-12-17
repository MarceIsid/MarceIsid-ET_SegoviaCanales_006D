import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.page.html',
  styleUrls: ['./detalle-profesor.page.scss'],
})
export class DetalleprofesorPage implements OnInit {

  profesor:any;
  nombre:any;

  profesores={
    id:0,
    nombre:"",
    apellido:"",
    materia:"",
    correo:"",
  }

  constructor(private activated: ActivatedRoute, 
    private route: Router, private alertcontroller: AlertController, private apicrud: ApicrudService) {
      this.activated.queryParams.subscribe(param =>{
        if (param['profsor']){
      this.profesor=JSON.parse(param['profesor']);
        }
        else{
          console.error('No se encuentram los datos');
        }
    });
    this.nombre= sessionStorage.getItem('username');
  }

  ngOnInit() {
    this.profesores = this.profesor;
  }

  volver(){
    this.route.navigate(['/tabs/tab1']);
  }

  actualizarDatos(Observable:any){
    this.route.navigate(['/actualizar', this.profesor.id],
      {queryParams:  {profesor: JSON.stringify(Observable)}}
    )
  }

  async eliminarDatos(){
    const alert = await this.alertcontroller.create({
      header: 'Eliminar profesor',
      message: '¿Estás seguro de eliminar este profesor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.route.navigate(['/detalle-profesor']);
          },
        },
        {
          text: 'Eliminar',
          role:  'confirm',
          handler: () => {
            this.elimina();
        },
      },
    ],
    });
    await alert.present();
  }

  elimina(){
    this.apicrud.deleteProfesor(this.profesor).subscribe();
    this.mensaje();
  }

  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Eliminado',
      message: 'profesor eliminado con éxito',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            this.route.navigate(['/inicio']);
            },
          },
        ],
  });
  await  alert.present();
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Creando Palabra',
      message: 'QR almacenado con éxito',
      buttons: ['Ok']
  })
  alerta.present();
}
}
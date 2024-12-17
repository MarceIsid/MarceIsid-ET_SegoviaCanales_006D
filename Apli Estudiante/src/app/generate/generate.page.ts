import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { Asignaturas } from 'src/interfaces/Asignaturas';


@Component({
  selector: 'app-generate',
  templateUrl: './generate.page.html',
  styleUrls: ['./generate.page.scss'],
})
export class GeneratePage implements OnInit {

  ramo: any;
  id:any;
  qrdata:string;
  nombre: any;


  asignatura={
    id: 0,
    nombre: "",
    image: "",
    profesor:"",
    description:"",
  }

  asignaturas: Asignaturas[]=[];
  

  constructor(
    private activated: ActivatedRoute,
    private router: Router,private alertcontroller: AlertController, private apicrud: ApicrudService
  ) {
    // Recibir los parámetros enviados en la navegación
    this.activated.queryParams.subscribe(param => {
        this.asignatura = JSON.parse(param['asignatura']);
    })
    this.qrdata='';
    this.nombre= sessionStorage.getItem('username');
    }

  ngOnInit() {
  }
  nClick(){
    this.router.navigate(['/agregar.html']);
  }

  ionViewWillEnter(){
    this.id=this.ramo.id;
    console.log(this.asignatura.id);
  }

  // Volver a la página anterior
  volver() {
    this.router.navigate(['/tabs/tab1']);
  }

  // Actualizar asignatura
  actualizarAsignatura(Observable:any) {
    this.router.navigate(['/actualizar', this.asignatura.id], {
      queryParams: { asignatura: JSON.stringify(Observable)}}
    )
  }

  // Generar QR
  generarQr() {
    if (this.asignatura && this.nombre) {
      // Generar el QR con la nueva estructura de la asignatura
      this.qrdata = `Asignatura: ${this.asignatura.nombre}\nDescripción: ${this.asignatura.description}\nProfesor: ${this.asignatura.profesor}\n`;
      console.log(this.qrdata);
    }
  }

  // Confirmar eliminación de asignatura
  async consultaElimina() {
    const alert = await this.alertcontroller.create({
      header: 'Confirmar Eliminación',
      message: '¿Eliminar la asignatura?',
      buttons: [
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            this.elimina();
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });
    await alert.present();
  }

  // Eliminar asignatura
  elimina(){
    this.apicrud.EliminarAsignatura(this.ramo).subscribe();
    this.mensaje();
  }

  // Mostrar mensaje después de eliminar asignatura
  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: 'Eliminando Asignatura',
      message: 'La asignatura ha sido eliminada.',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });
    await alert.present();
  }

  // Mostrar mensaje cuando el QR se haya generado
  async mostrarMensaje() {
    const alerta = await this.alertcontroller.create({
      header: 'Generación de QR',
      message: 'El código QR ha sido generado.',
      buttons: ['Ok']
    });
    alerta.present();
  }
}

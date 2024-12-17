import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  profesor:any;

  Profesores={
    nombre: '',
    apellido: '',
    correo: '',
    materia:'',
    contraseña:'',
  }



  constructor(private apicrud: ApicrudService, private alertcontroller: AlertController, 
              private router: Router,
              private activated: ActivatedRoute) { 
                this.activated.queryParams.subscribe(param=>{
                  this.Profesores = JSON.parse(param['profesores']);
                })
              }

  ngOnInit() {
    this.profesor=this.Profesores;
  }

  volver(){
    this.router.navigate(['/tabs/tab3']);
  }

  updateProfesor(){
    this.apicrud.putProfesor(this.profesor).subscribe();
    this.mensaje();
  }

  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Información Actualizada',
      message: 'La información se ha actualizado correctamente',
      buttons:[
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
}

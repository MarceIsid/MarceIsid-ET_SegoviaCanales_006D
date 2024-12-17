import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  correo:string="";
  pass:string="";
  pass2:string="";

  constructor(private alertcontroller: AlertController, 
    private router:Router) { }

    async register(){
      const alert = await this.alertcontroller.create({
        header: 'Registrado!',
        mode:'ios',
        message: 'Registro Exitoso '+this.correo,
        buttons: [
          {
            text: 'Ingresar',
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
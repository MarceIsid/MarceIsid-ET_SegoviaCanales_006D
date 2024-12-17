import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


 
  selectedDate: string='';
  startDate: string='';
  endDate: string='';
  minDate: string = new Date().toISOString(); // Fecha mínima permitida
  errorMessage: string='';
  alertButtons = ['Gracias'];
  imageSrc: string | undefined;

  constructor(private menucontroller: MenuController , private alertController: AlertController) { 
  }


  mostrarMenu(){
    this.menucontroller.open('first');
  }
 

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
    this.errorMessage = ''; 
  }

  async submitDates() {
    if (!this.selectedDate) {
      this.errorMessage = 'Debe seleccionar una fecha.';
      return;
    }

    // Mostrar alerta de éxito
    const alert = await this.alertController.create({
      header: 'Procesando solicitud',
      message: 'Se ha enviado tu justificativo correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos, // O CameraSource.Camera para tomar una foto
      });

      this.imageSrc = photo.dataUrl; // Almacenar la URL de la imagen
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}



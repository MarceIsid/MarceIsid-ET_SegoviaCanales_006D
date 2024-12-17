import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  ramo: any;

  asignatura={
    id: 0,
    nombre: "",
    descripcion: "",
    image: "",
    profesor:"",
    date: ""
  }
  imageUrl: string | null = null;


constructor(private activated: ActivatedRoute,
            private router: Router,
            private apicrud: ApicrudService) {
    // Recibir los parámetros enviados en la navegación
    this.activated.queryParams.subscribe(param => {
        this.asignatura = JSON.parse(param['asignatura']);
    })
    }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.asignatura=this.ramo;
    console.log(this.asignatura.id);
  }

  updateAsignatura(){
    this.apicrud.putAsignaturas(this.asignatura).subscribe();
    this.router.navigateByUrl("/asignatura")
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result; // Muestra la vista previa
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    // Aquí puedes manejar el envío del formulario y la imagen
    console.log('Datos enviados:', this.asignatura);
    console.log('Imagen seleccionada:', this.imageUrl);
  }

}

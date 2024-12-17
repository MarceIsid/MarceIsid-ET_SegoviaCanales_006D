import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Profesor } from 'src/interfaces/profesor';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  registroForm: FormGroup;
  passwordVisible: boolean = false;  // Control de visibilidad de la contraseña

  nuevoProfesor: Profesor= {
    id:0,
    nombre: "",
    apellido: "",
    contraseña: "",
    materia: "",
    correo: "",
    isactive: false
  }

  userdata: any;

  constructor(private authservice: AuthService, 
    private alertcontroller: AlertController,
    private router: Router,
    private fBuilder: FormBuilder) {
    this.registroForm = this.fBuilder.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'contraseña': new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'materia': new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  }

  ngOnInit() {}

  crearUsuario() {
    if (this.registroForm.valid) {
      this.authservice.GetProfesorById(this.registroForm.value.id).subscribe(resp => {
        this.userdata = resp;
        if (this.userdata.length > 0) {
          this.registroForm.reset();
          this.errorDuplicidad();
        } else {
          this.nuevoProfesor.nombre = this.registroForm.value.nombre;
          this.nuevoProfesor.contraseña = this.registroForm.value.contraseña;
          this.nuevoProfesor.correo = this.registroForm.value.correo;
          this.nuevoProfesor.apellido = this.registroForm.value.apellido;
          this.nuevoProfesor.materia = this.registroForm.value.materia;
          this.nuevoProfesor.isactive = true;
          this.authservice.PostProfesor(this.nuevoProfesor).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/tabs/tab1');
        }
      })
    }
  }

  async mostrarMensaje() {
    const alerta = await this.alertcontroller.create({
      header: 'Registro Exitoso',
      message: 'Bienvenid@! ' + this.nuevoProfesor.nombre,
      buttons: ['OK']
    })
    await alerta.present();
  }

  async errorDuplicidad() {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'El usuario ' + this.nuevoProfesor.nombre + ' ya está registrado',
      buttons: ['OK']
    })
    await alerta.present();
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}

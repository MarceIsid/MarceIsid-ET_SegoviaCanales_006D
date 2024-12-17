import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  loginForm: FormGroup;
  passwordVisible: boolean = false;
  userdata: any;

  profesor = {
    id: 0,
    nombre: "",
    apellido: "",
    contraseña: "",
    materia: "",
    correo: "",
    isactive: false
  };

  constructor(
    private authservice: AuthService,
    private router: Router,
    private toast: ToastController,
    private alertcontroller: AlertController,
    private builder: FormBuilder
  ) {
    this.loginForm = this.builder.group({
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'contraseña': new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit() {}

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    const correo = this.loginForm.value.correo;
    const contraseña = this.loginForm.value.contraseña;

    this.authservice.GetProfesorByCorreo(correo).subscribe(resp => {
      this.userdata = resp;
      console.log(this.userdata);

      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.profesor = {
        id: this.userdata[0].id,
        nombre: this.userdata[0].nombre,
        apellido: this.userdata[0].apellido,
        correo: this.userdata[0].correo,
        materia: this.userdata[0].materia,
        contraseña: this.userdata[0].contraseña,
        isactive: this.userdata[0].isactive
      };

      if (this.profesor.contraseña !== contraseña) {
        this.loginForm.reset();
        this.ErrorUsuario();
        return;
      }

      if (!this.profesor.isactive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }

      this.IniciarSesion(this.profesor);
    });
  }

  private IniciarSesion(profesor: any) {
    sessionStorage.setItem('correo', profesor.correo);
    sessionStorage.setItem('contraseña', profesor.contraseña);
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('Sesión Iniciada con el correo ' + this.profesor.correo);
    this.router.navigate(['/tabs/tab1']);
  }

  async showToast(msg: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }

  async UsuarioInactivo() {
    const toast = await this.alertcontroller.create({
      header: 'Profesor Inactivo',
      message: 'El usuario con el que intenta iniciar sesión se encuentra inactivo',
      buttons: ['OK']
    });
    toast.present();
  }

  async ErrorUsuario() {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'Revise su correo y contraseña',
      buttons: ['OK']
    });
    alerta.present();
  }

  async UsuarioNoExiste() {
    const alerta = await this.alertcontroller.create({
      header: 'No existe',
      message: 'Debe registrarse',
      buttons: ['OK']
    });
    alerta.present();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  Registrar() {
    this.router.navigate(['/crear-usuario']);
  }
}

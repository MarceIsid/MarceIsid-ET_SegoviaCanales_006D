import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Users } from 'src/interfaces/users';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user: Users | null = null;  // Tipar correctamente la variable 'user' como Usuario o null
  usuarios: Users[] = [ // JSON con los usuarios, ahora es un arreglo de objetos tipo Usuario
    {
      "id": "1",
      "username": "usuario1",
      "password": "duoc1234",
      "email": "usuario1@mail.cl",
      "isactive": true
    },
    {
      "id": "2",
      "username": "usuario2",
      "password": "maipu1234",
      "email": "usuario2@mail.cl",
      "isactive": true
    }
  ];

  constructor(private menucontroller: MenuController) { }

  ngOnInit() {
    this.loadUserData();
  }

  // Mostrar el menú lateral
  mostrarMenu() {
    this.menucontroller.open('first');
  }

  // Método para cargar el perfil del usuario desde el JSON
  loadUserData() {
    const userId = "1";  // Este ID puede ser dinámico basado en la sesión del usuario
    this.user = this.usuarios.find(u => u.id === userId) || null;  // Buscar el usuario en el JSON
    if (!this.user) {
      console.error('Usuario no encontrado');
    }
  }

  // Método para actualizar la imagen del perfil
  updateProfileImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.user) {
          this.user.image = reader.result as string; // Actualizar imagen del perfil
        }
      };
      reader.readAsDataURL(file); // Leer la imagen seleccionada
    }
  }

  // Método para editar los datos del perfil
  updateProfileData() {
    console.log('Perfil actualizado', this.user);
  }
}
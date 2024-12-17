import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'detalle-profesor',
    loadChildren: () => import('./detalle-profesor/detalle-profesor.module').then( m => m.DetalleProfesorPageModule),
    canActivate: [AutorizadoGuard]
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

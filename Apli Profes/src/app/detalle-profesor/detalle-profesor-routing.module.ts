import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleprofesorPage } from './detalle-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleprofesorPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProfesorPageRoutingModule {}

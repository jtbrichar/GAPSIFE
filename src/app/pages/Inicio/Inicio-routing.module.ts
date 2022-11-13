import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './Inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    data: {
      breadcrumb: 'Inicio ...',
      icon: 'icofont-file-code bg-c-blue',
      breadcrumb_caption: '',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }

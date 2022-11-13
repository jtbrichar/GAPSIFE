import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaComponent} from './Lista.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
    data: {
      breadcrumb: 'Lista ...',
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
export class ListaRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ecommerceComponent } from './layout/ecommerce/ecommerce.component';

const routes: Routes = [
  {
  path: '',
    component: ecommerceComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./pages/Inicio/Inicio.module').then(m => m.InicioModule)
      }
      ,{
        path: 'Lista',
        loadChildren: () => import('./pages/Lista/Lista.module').then(m => m.ListaModule)
      }]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

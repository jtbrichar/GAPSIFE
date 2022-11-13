import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InicioComponent } from './Inicio.component';
import { InicioRoutingModule } from './Inicio-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InicioRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule { }
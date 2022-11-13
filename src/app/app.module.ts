import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { tituloComponent } from './layout/ecommerce/titulo/titulo.component';
import { ecommerceComponent } from './layout/ecommerce/ecommerce.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule, MatCard} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ecommerceComponent,
    tituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule
     
  ],
  exports: [ MatCard ], 
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

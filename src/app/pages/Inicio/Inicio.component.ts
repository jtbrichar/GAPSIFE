import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { GeneralService } from '../../_services/General.service';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
  styleUrls: ['./Inicio.component.css']
})

export class InicioComponent implements OnInit 
{

  public data: any;
  Imagen ='../../../../../assets/images/Usuario.png';
  
  constructor(
    private router: Router, 
    private generalService: GeneralService
    ) { }

    ngOnInit() 
    {
      this.generalService.GetInformacion().subscribe(data => {
        this.data=data
      },
      error => {
        console.log('Log en error : ', error);
    });
    }

  continuar()
  {
    this.router.navigate(['/Lista'])
  }

  

}
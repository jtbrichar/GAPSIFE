import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})


export class tituloComponent implements OnInit {
  
  Logotipo ='../../../../assets/images/logo.png';
  
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    
  }
  
  ngOnInit() 
  {
    
  }

}
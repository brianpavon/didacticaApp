import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  idiomaActual : string = "espaniol";
  portugues : boolean = false;
  ingles : boolean = false;
  espaniol : boolean = true;

  colores : boolean = false;
  numeros : boolean = false;
  animales : boolean = true;

  constructor(private auth : AuthService) {}

  cerrarSesion(){    
    this.auth.logout();
  }

  cambiarIdioma(seleccion : string)
  {
    switch(seleccion)
    {
        case "es":
          this.espaniol = true;
          this.ingles = false;
          this.portugues = false; 
          this.idiomaActual = "espaniol";        
          break;
        case "en":
          this.ingles = true;
          this.espaniol = false;
          this.portugues = false;
          this.idiomaActual = "ingles";
          break;
        case "po":
          this.portugues = true;
          this.espaniol = false;
          this.ingles = false;
          this.idiomaActual = "portugues";
          break;
    }
  }

  cambiarTema(opcion : string)
  {
    switch(opcion)
    {
        case 'a':
          this.animales = true;
          this.colores = false;
          this.numeros = false;
          break;
        case 'n':
          this.numeros = true;
          this.animales = false;
          this.colores = false;
          break;
        case 'c':
          this.colores = true;
          this.numeros = false;
          this.animales = false;
          break;
    }
  }

}

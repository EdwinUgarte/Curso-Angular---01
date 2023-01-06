import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo: Personaje = {
    nombre: "Mr. Popo",
    poder: 10
  }

  personajes: Personaje[] = [
    {nombre: 'Yamcha',  poder: 100},
    {nombre: 'Freezer', poder: 14500},
    {nombre: 'Goku',    poder: 18000}
  ]


  agregarNuevo(data: Personaje){
    this.personajes.push(data)
  }



}

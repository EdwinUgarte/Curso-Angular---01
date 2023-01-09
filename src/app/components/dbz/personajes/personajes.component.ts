import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  
  get personajes(){
    
    return this.dbService.personajes;
    
  }
  
  //? Aqui se hace la inyeccion de dependencias, en el constructor
  constructor(private dbService : DbzService){}


}

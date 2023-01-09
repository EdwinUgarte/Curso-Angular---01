import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: 'goten',
    poder: 0
  }

  // @Output()
  // newCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbService: DbzService){}
  
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return alert("No puedes agregar personajes sin nombre")}
    
    // this.newCharacter.emit(this.nuevo);
    
    this.dbService.agregarPersonaje(this.nuevo);

  
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }
  
  


}

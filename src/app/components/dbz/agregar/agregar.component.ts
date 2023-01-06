import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

  @Output()
  newCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return alert("No puedes agregar personajes sin nombre")}
    console.log(this.nuevo);

    this.newCharacter.emit(this.nuevo);
  
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }
  
  


}

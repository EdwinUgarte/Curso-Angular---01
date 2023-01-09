import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
export class DbzService {

    
    private _personajes: Personaje[] = [
        {nombre: 'Yamcha',  poder: 100},
        {nombre: 'Freezer', poder: 14500},
        {nombre: 'Goku',    poder: 18000}
    ]
    
    get personajes(){
        //[...] Operador spred rompe la referencia y crea un nuevo arreglo independiente
        return [...this._personajes];
    }
    
    
    constructor() {}

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }


}
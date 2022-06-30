import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }

  crearLista(titulo: string) {
    const elemento = new Lista(titulo);
    this.listas.push(elemento);
    this.guardarStorage();
    return elemento.id;
  }

  guardarStorage() {
    //pasar de arreglo a JSON
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      //pasar de JSON a arreglo
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }

  }
}

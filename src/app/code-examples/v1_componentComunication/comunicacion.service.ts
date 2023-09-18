import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  //var pal envio
  private datosFuente: Subject<String>;

  //variable pa recibir info
  private datosFuente$: Observable<String>;

  constructor() {
    this.datosFuente = new Subject();
    this.datosFuente$ = this.datosFuente.asObservable();
  }

  enviarDatos(mensaje: String) {
    this.datosFuente.next(mensaje);
  }

  obtenerDatos() {
    return this.datosFuente$;
  }

}

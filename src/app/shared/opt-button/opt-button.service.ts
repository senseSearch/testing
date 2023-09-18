import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface BtnProperties {
  icon?: String;
  primaryText: String;
  description?: String
  extraDetails?: String;
}

@Injectable({
  providedIn: 'root'
})

export class OptButtonService {

  private datosFuente: Subject<String>;
  private datosFuente$: Observable<String>;

  constructor() {
    this.datosFuente = new Subject();
    this.datosFuente$ = this.datosFuente.asObservable();
  }

  enviarDatos(datos: String) {
    this.datosFuente.next(datos);
  }

  obtenerDatos() {
    return this.datosFuente$;
  }
}

import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/core/categoria.interface';
import { Cotizacion } from 'src/app/core/cotizacion.interface';
import { CATEGORIAS } from 'src/app/core/data mock/mock-categories';
import { COTIZACIONES } from 'src/app/core/data mock/mock-cotizacion';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  //declarando array de objetos de tipo Cotizacion
  private cotizaciones: Cotizacion[] = [];
  private categorias: Categoria[] = [];

  constructor() {
    this.cotizaciones = COTIZACIONES;
    this.categorias = CATEGORIAS;
  }

  getCotizacion() {
    return this.cotizaciones;
  }

  setCotizacion(cot: Cotizacion) {
    this.cotizaciones.push(cot);
  }

  getCategorias() {
    return this.categorias;
  }
}

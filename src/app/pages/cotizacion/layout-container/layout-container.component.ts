import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Component1Component as component1 } from '../component1/component1.component';
import { Component2Component as component2 } from '../component2/component2.component';
import { Component3Component as component3 } from '../component3/component3.component';
import { CotizacionService } from '../cotizacion.service';
import { Categoria } from 'src/app/core/categoria.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  @ViewChild('appContenedor', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  categorias: Categoria[];
  tittle: string;
  subtittle: string;
  step: number;

  hide = true;

  constructor(private router: Router, private cotizacion: CotizacionService) {
    this.tittle = "categoria";
    this.subtittle = "cotizacion";
    this.step = 0;
    this.categorias = cotizacion.getCategorias();
  }

  ngOnInit(): void {
    this.container.clear();
    this.container.createComponent(component1);
  }

  navegarA(paso: number) {
    this.router.navigate([`/paso-${paso}`])
  }

  cargarComponente(cat: Categoria) {
    console.log("creando componente");
    this.subtittle = cat.name;
    let loadComp: any;

    switch (cat.id) {
      case 0:
        loadComp = component1;
        break;
      case 1:
        loadComp = component2;
        break;
      default:
        loadComp = component3;
        break;
    }

    this.container.clear();
    this.container.createComponent(loadComp);
  }

  factura() {
    this.step++;
  }

  corp() {
    this.step++;
  }

  publicitario() {
    this.step++;
  }

  before() {
    this.step = 0
  }
}

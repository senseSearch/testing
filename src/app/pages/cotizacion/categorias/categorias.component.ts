import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CotizacionService } from '../cotizacion.service';
import { Categoria } from 'src/app/core/categoria.interface';
import { OptButtonService } from 'src/app/shared/opt-button/opt-button.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[];
  tittle: string;
  subtittle: string;
  step: number;
  hide = true;

  mensaje: String = 'mensaje From categories layout';
  private subscripcion: Subscription;

  constructor(private router: Router, private cotizacion: CotizacionService, private optButtonService: OptButtonService) {
    this.tittle = "categoria";
    this.subtittle = "cotizacion";
    this.step = 0;
    this.categorias = cotizacion.getCategorias();

    //comunicacion entre componentes con observables y servicio
    this.subscripcion = this.optButtonService.obtenerDatos().subscribe(
      (datos) => {
        this.mensaje = datos;
      })
  }

  enviarMensaje() {
    this.optButtonService.enviarDatos(this.mensaje);
  }

  ngOnInit(): void {
  }

  navegarA(paso: number) {
    this.router.navigate([`/paso-${paso}`])
  }

  before() {
    this.step = 0
  }
}

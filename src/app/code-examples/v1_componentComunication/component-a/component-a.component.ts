import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit, OnDestroy {

  mensajeA: String = 'comp-A';
  subscripcion: Subscription;

  constructor(private comunicacionService: ComunicacionService) {
    this.subscripcion = this.comunicacionService.obtenerDatos().subscribe((datos) => {
      this.mensajeA = datos;
    });
  }

  ngOnInit(): void {
  }

  enviarMensajeA() {
    this.comunicacionService.enviarDatos(this.mensajeA);
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}

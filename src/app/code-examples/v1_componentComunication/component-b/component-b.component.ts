import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit, OnDestroy {

  mensajeB: String = 'Msg B';
  private suscripcion: Subscription;

  constructor(private comunicacion: ComunicacionService) {
    this.suscripcion = this.comunicacion.obtenerDatos().subscribe((datos) => {
      this.mensajeB = datos;
    });
  }

  enviarMensajeB() {
    this.comunicacion.enviarDatos(this.mensajeB);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}

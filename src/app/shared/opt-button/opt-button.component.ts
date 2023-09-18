import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BtnProperties, OptButtonService } from './opt-button.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-opt-button',
  templateUrl: './opt-button.component.html',
  styleUrls: ['./opt-button.component.scss']
})
export class OptButtonComponent implements OnInit, OnDestroy {

  @Input() btnProps?: BtnProperties;

  //prueba de envio bidireccional de datos
  recepMsg: String = 'recepcion mensaje nuevo';

  private subcripcion: Subscription;
  properties?: BtnProperties;           //Test for observables

  constructor(private optButtonService: OptButtonService) {
    this.subcripcion = this.optButtonService.obtenerDatos().subscribe(
      (mensaje) => {
        this.recepMsg = mensaje;
      }
    )

    console.log(this.recepMsg);
    /* this.recepMsg = { primaryText: ''}; */
  }

  enviarNuevosDatos() {
    this.optButtonService.enviarDatos(this.recepMsg);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcripcion.unsubscribe();
  }

}

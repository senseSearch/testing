import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss'],

})
export class CotizacionComponent implements OnInit {

  longText = "Text Line";
  hide = true;
  number = 0;

  constructor() {
    /* this.longText = "Text Line"; */
  }

  ngOnInit(): void { }

}

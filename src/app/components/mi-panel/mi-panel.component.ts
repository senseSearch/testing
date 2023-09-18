import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido.model';

@Component({
  selector: 'app-mi-panel',
  templateUrl: './mi-panel.component.html',
  styleUrls: ['./mi-panel.component.css']
})

export class MiPanelComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  
  @Input() pedido!: Pedido;

  constructor() { }

  ngOnInit(): void {
  }

  //esta funcion evita que el click sea solo al icono y no al panel
  moveUp(event : any) : void{
    event.stopPropagation();
    console.log(event);
  }

  msg(event:any): void{
    event.stopPropagation();
    alert("you has been pressed button");
  }
}
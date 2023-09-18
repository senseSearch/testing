import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/categoria.interface';
import { CotizacionService } from '../cotizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  categorias: Categoria[] = [];

  constructor(private router: Router, private cotizacionService: CotizacionService) {

  }

  navegarA(paso: number) {
    this.router.navigate([`/paso-${paso}`])
  }

  ngOnInit(): void {
    this.categorias = this.cotizacionService.getCategorias();
  }

}

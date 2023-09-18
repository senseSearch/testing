import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './pages/cotizacion/component1/component1.component';
import { Component2Component } from './pages/cotizacion/component2/component2.component';
import { Component3Component } from './pages/cotizacion/component3/component3.component';
import { CategoriasComponent } from './pages/cotizacion/categorias/categorias.component';

const routes: Routes = [

  /* { path: '', component: ProductsComponent }, */
  /* { path: 'categories', component: CategoriasComponent, data: { animation: 'categories' } }, */
  { path: '', component: CategoriasComponent, data: { animation: 'categories' } },
  { path: 'paso-1', component: Component1Component, data: { animation: 'step_1' } },
  { path: 'paso-2', component: Component2Component, data: { animation: 'step_2' } },
  { path: 'paso-3', component: Component3Component, data: { animation: 'step_1' } },
  /* { path: '', redirectTo: 'init', pathMatch: 'full' } */
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }

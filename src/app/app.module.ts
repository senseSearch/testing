import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { CustomStepperComponent } from './components/custom-stepper/custom-stepper.component';
import { CotizacionModule } from './pages/cotizacion/cotizacion.module';
import { AppRoutingModule } from './app-routing.module';
import { CotizacionService } from './pages/cotizacion/cotizacion.service';
import { ToggleComponent } from './shared/toggle/toggle.component';
import { SlideRoutingModule } from './code-examples/animations/slideIn/slide-routing.module';
import { ProductsModule } from './pages/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomStepperComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,


    //user modules
    CotizacionModule,
    SlideRoutingModule,
    ProductsModule
  ],
  providers: [CotizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

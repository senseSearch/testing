import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomStepperComponent } from './components/custom-stepper/custom-stepper.component';
import { CotizacionModule } from './pages/cotizacion/cotizacion.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,


    //user modules
    CotizacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

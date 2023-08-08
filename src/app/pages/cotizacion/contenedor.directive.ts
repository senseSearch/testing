import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContenedor]'
})
export class ReceptorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

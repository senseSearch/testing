import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { MatRippleModule } from '@angular/material/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { OptButtonService } from 'src/app/shared/opt-button/opt-button.service';
import { OptButtonComponent } from 'src/app/shared/opt-button/opt-button.component';
import { FormsModule } from '@angular/forms';
import { CodeExamplesModule } from 'src/app/code-examples/code-examples.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutContainerComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    CategoriasComponent,
    OptButtonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatRippleModule,
    FormsModule,
    MatDividerModule,
    RouterModule,

    CodeExamplesModule
  ],
  providers: [OptButtonService],
  exports: [
    LayoutContainerComponent
  ]
}
)
export class CotizacionModule { }

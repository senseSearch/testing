import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './v1_componentComunication/component-a/component-a.component';
import { ComponentBComponent } from './v1_componentComunication/component-b/component-b.component';
import { ComunicacionService } from './v1_componentComunication/comunicacion.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminComponent } from './v2_componentComunication/admin/admin.component';
import { EmployeeComponent } from './v2_componentComunication/employee/employee.component';
import { BtnTransitionComponent } from './animations/btn-transition/btn-transition.component';
import { LayoutAComponent } from './animations/slideIn/layout-a/layout-a.component';
import { LayouBComponent } from './animations/slideIn/layou-b/layou-b.component';
import { MainLayoutComponent } from './animations/slideIn/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    AdminComponent,
    EmployeeComponent,
    BtnTransitionComponent,
    LayoutAComponent,
    LayouBComponent,
    MainLayoutComponent
  ],
  providers: [ComunicacionService],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ComponentAComponent,
    ComponentBComponent,
    AdminComponent,
    BtnTransitionComponent,
    MainLayoutComponent
  ],
})
export class CodeExamplesModule { }

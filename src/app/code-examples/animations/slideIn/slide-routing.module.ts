import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAComponent } from './layout-a/layout-a.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayouBComponent } from './layou-b/layou-b.component';

const layoutRoutes: Routes = [
  { path: 'main', component: MainLayoutComponent, data: { animation: 'mainL' } },
  { path: 'layoutA', component: LayoutAComponent, data: { animation: 'layA' } },
  { path: 'layoutB', component: LayouBComponent, data: { animation: 'layB' } },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule]
})
export class SlideRoutingModule { }

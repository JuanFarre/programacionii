import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProbandoComponent } from './components/probando/probando.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

const routes: Routes = [
  { path: 'probando', component: ProbandoComponent },
  {path: 'empleados', component: EmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { CreacionComponent } from 'app/creacion/creacion.component';
import { InicialProfesorComponent } from 'app/inicial-profesor/inicial-profesor.component'
import { InicialEstudianteComponent } from 'app/inicial-estudiante/inicial-estudiante.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'creacion', component: CreacionComponent },
  { path: 'inicial-profesor', component: InicialProfesorComponent },
  { path: 'inicial-estudiante', component: InicialEstudianteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

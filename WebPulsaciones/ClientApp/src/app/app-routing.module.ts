import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './pulsacion/persona-consulta/persona-consulta.component';
import { Routes, RouterModule } from '@angular/router';
import { PersonaRegistroReactiveComponent } from './pulsacion/persona-registro-reactive/persona-registro-reactive.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'personaConsulta',
    component: PersonaConsultaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  },
  {
    path: 'personaRegistroReactive', component: PersonaRegistroReactiveComponent,  canActivate: [AuthGuard]
  },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

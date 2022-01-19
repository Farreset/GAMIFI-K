import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileAlumnoComponent } from './components/profile-alumno/profile-alumno.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'ralumno', component: RegisterAlumnoComponent, pathMatch: 'full'},
    { path: 'rprofe', component: RegisterProfeComponent, pathMatch: 'full'},
    { path: 'palumno', component: ProfileAlumnoComponent, pathMatch: 'full'},
    { path: 'pprofe', component: ProfileProfeComponent, pathMatch: 'full'},
   { path: '**', redirectTo: '/register' }
  ];

export const Routing = RouterModule.forRoot(routes);
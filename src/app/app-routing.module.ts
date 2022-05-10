import { EditProfileProfeComponent } from './components/edit-profile-profe/edit-profile-profe.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileAlumnoComponent } from './components/profile-alumno/profile-alumno.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingAdminComponent } from './components/ranking-admin/ranking-admin.component';
import { EditProfileAlumnoComponent } from './components/edit-profile-alumno/edit-profile-alumno.component';
import { EntregasComponent } from './components/entregas/entregas.component';


const routes: Routes = [
  { path: 'ranking', component: RankingsComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent},
    { path: 'ralumno', component: RegisterAlumnoComponent},
    { path: 'rprofe', component: RegisterProfeComponent},
    { path: 'palumno', component: ProfileAlumnoComponent},
    { path: 'pprofe', component: ProfileProfeComponent},
    { path: 'editar-profe', component: EditProfileProfeComponent},
    { path: 'editar-alumno', component: EditProfileAlumnoComponent},
    { path: 'entregas', component: EntregasComponent},
  { path: 'adminRank/:id_r', component: RankingAdminComponent},
  //{ path: '**', redirectTo: '/register' } Dejar la ultima
  ];

export const Routing = RouterModule.forRoot(routes);

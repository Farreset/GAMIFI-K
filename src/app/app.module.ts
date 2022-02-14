
import { Routing } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileAlumnoComponent } from './components/profile-alumno/profile-alumno.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';
import { LoginComponent } from './components/login/login.component';

import { APP_BASE_HREF } from '@angular/common';
<<<<<<< Updated upstream
// import { RegistrarProfesorServiceComponent } from './server/registrar-profesor-service/registrar-profesor-service.component';
=======
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingAdminComponent } from './components/ranking-admin/ranking-admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterAlumnoComponent,
    RegisterProfeComponent,
    LoginComponent,
    ProfileProfeComponent,
    ProfileAlumnoComponent
  ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  FormsModule,
  Routing,
  HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
<<<<<<< Updated upstream
  bootstrap: [AppComponent]
=======
  bootstrap: [AppComponent],

>>>>>>> Stashed changes
})
export class AppModule { }

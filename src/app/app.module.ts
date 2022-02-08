
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
// import { RegistrarProfesorServiceComponent } from './server/registrar-profesor-service/registrar-profesor-service.component';

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
  Routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

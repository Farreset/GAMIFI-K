import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profe } from 'src/app/interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class RegistrarProfesorService {

  URL = 'http://localhost/';

  constructor(private http: HttpClient) { }

  registrarProfesor(){
    return this.http.get(`${this.URL}insertarProfesor.php`);
    // return this.http.get(`${this.URL}registrarProfesor.php?id_profesor=${id_profesor}`);
  }



}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarProfesorServiceService {

  URL = 'http://localhost/';

  constructor(private http: HttpClient) { }

  registrarProfesor(){

    return this.http.get('${this.URL}registrarProfesor.php');
  }

}

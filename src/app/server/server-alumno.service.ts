import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerAlumnoService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarAlumno(mail: any,pssw: any) {
    return this.http.get(`${this.URL}alumnos/listarAlumnos.php?mail=${mail}&pssw=${pssw}`);
  }
  
  
  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  modificarAlumno(id_alumno: any, nick: any, fname: any, lname: any, mail: any, year: any, pssw: any, psswConf: any) {
    let alumnos: Alumno = {
      id_alumno: id_alumno,
      nick: nick,
      fname: fname,
      lname: lname,
      year: year,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf
    }
    return this.http.post(`${this.URL}alumnos/insertarAlumno.php`,JSON.stringify(alumnos));
  }
  // insertarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}insertarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  
  insertarAlumno(id_alumno: any, nick: any, fname: any, lname: any, mail: any, year: any, pssw: any, psswConf: any){
    let alumnos: Alumno = {
      id_alumno: id_alumno,
      nick: nick,
      fname: fname,
      lname: lname,
      year: year,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf
    }
    return this.http.post(`${this.URL}alumnos/insertarAlumno.php`,JSON.stringify(alumnos));
  }
  
  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);
  
  // }




}

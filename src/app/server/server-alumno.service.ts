import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerAlumnoService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarAlumno(alumnoParam: any) {
    return this.http.post(`${this.URL}alumnos/listarAlumnos.php`,JSON.stringify(alumnoParam));
  }

  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  modificarAlumno(id_alumno: any, nick: any, fname: any, lname: any, mail: any, fecha: any, pssw: any, psswConf: any) {
    let alumnos: Alumno = {
      id_alumno: id_alumno,
      nick: nick,
      fname: fname,
      lname: lname,
      fecha: fecha,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf
    }
    return this.http.post(`${this.URL}alumnos/modificarAlumno.php`,JSON.stringify(alumnos));
  }

  insertarAlumnos(id_alumno: any, nick: any, fname: any, lname: any, mail: any, fecha: any, pssw: any, psswConf: any){
    let alumnos: Alumno = {
      id_alumno: id_alumno,
      nick: nick,
      fname: fname,
      lname: lname,
      fecha: fecha,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf
    }
    return this.http.post(`${this.URL}alumnos/insertarAlumnos.php`,JSON.stringify(alumnos));
  }

  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);

  // }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno, Ranking } from '../interfaces/interfaz';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';


@Injectable({
  providedIn: 'root'
})
export class ServerAlumnoService {


  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarAlumno(alumnos: any) {
    return this.http.post(`${this.URL}alumnos/listarAlumnos.php`,JSON.stringify(alumnos));
  }

  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  modificarAlumno(alumno:Alumno) {
   console.log(alumno);

    return this.http.post(`${this.URL}alumnos/modificarAlumnos.php`,JSON.stringify(alumno));
  }

  unirseRanking(ranking:Ranking){

    return this.http.post(`${this.URL}ranking/unirseRanking.php`,JSON.stringify(ranking));
  }



  insertarAlumnos(id_alumno: any, nick: any, fname: any, lname: any, mail: any, fecha: any, pssw: any, psswConf: any, avatar: any){
    let alumnos: Alumno = {
      id_alumno: id_alumno,
      nick: nick,
      fname: fname,
      lname: lname,
      fecha: fecha,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf,
      avatar: avatar
    }
    return this.http.post(`${this.URL}alumnos/insertarAlumnos.php`,JSON.stringify(alumnos));
  }
  editarImagen(alumno: any){

    return this.http.post(`${this.URL}alumnos/modificarAlumnos.php`,JSON.stringify(alumno));
  }

  listarMiembros(id_ranking: Number) {
    console.log("Ranking en service: ", id_ranking);
    return this.http.get(`${this.URL}ranking/listarMiembros.php?id_alumno=${id_ranking}`);
  }


}

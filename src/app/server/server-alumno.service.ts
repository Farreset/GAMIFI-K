import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interfaces/interfaz';
<<<<<<< Updated upstream
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
=======
import { Ranking } from '../interfaces/interfaz';
>>>>>>> Stashed changes


@Injectable({
  providedIn: 'root'
})
export class ServerAlumnoService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarAlumno(params: any) {
    return this.http.post(`${this.URL}alumnos/listarAlumnos.php`,JSON.stringify(params));
  }

  modificarAlumno(alumno:Alumno) {
   console.log(alumno);

    return this.http.post(`${this.URL}alumnos/modificarAlumnos.php`,JSON.stringify(alumno));
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


  //RANKINGS
  listarRanking(ranking: Ranking) {
    console.log(ranking);
    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(ranking));
  }

}

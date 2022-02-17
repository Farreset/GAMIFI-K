import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profe } from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerProfesorService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarProfesor(mail: any,pssw: any) {
    return this.http.get(`${this.URL}profesores/listarProfesor.php?mail=${mail}&pssw=${pssw}`);
  }
  
  
  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  modificarProfesor(id_profesor: any, nick: any, fname: any, lname: any, mail: any, centro: any, pssw: any, psswConf: any) {
    let profes: Profe = {
      id_profesor: id_profesor,
      nick: nick,
      fname: fname,
      lname: lname,
      centro: centro,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf
    }
    return this.http.post(`${this.URL}profesores/insertarProfesor.php`,JSON.stringify(profes));
  }
  // insertarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}insertarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  
  insertarProfesor(id_profesor: any, nick: any, fname: any, lname: any, mail: any, centro: any, pssw: any, psswConf: any){
    let profes: Profe = {
      id_profesor: id_profesor,
      nick: nick,
      fname: fname,
      lname: lname,
      centro: centro,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf
    }
    return this.http.post(`${this.URL}profesores/insertarProfesor.php`,JSON.stringify(profes));
  }
  
  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);
  
  // }




}


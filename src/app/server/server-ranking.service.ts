import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrega, Ranking } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerRankingService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarRanking(ranking: Ranking) {
    console.log('service',ranking);

    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(ranking));
  }

  listarRankingProfe(ranking: Ranking) {
    console.log('service',ranking);
    return this.http.post(`${this.URL}ranking/listarRankingProfe.php`,JSON.stringify(ranking));
  }

  listarEntregaProfe(id_r: number) {
    console.log("service",id_r);
    return this.http.get(`${this.URL}entregas/listarEntregaProfe.php?id_r=${id_r}`);
  }
  listarEntregaAlumno(id_alumno: number, id_r: number) {
    console.log("service:",id_alumno,id_r);
    return this.http.get(`${this.URL}entregas/listarEntregaAlumno.php?id_alumno=${id_alumno}&id_r=${id_r}`);
  }
  listarAlumnoPunt(id_r: number) {
    console.log("punntuacion",id_r);
    return this.http.get(`${this.URL}alumnos/listarAlumnoPunt.php?id_r=${id_r}`);
  }

  listarAlumnos(id_r: number) {
    return this.http.get(`${this.URL}ranking/listarAlumnos.php?id_r=${id_r}`);
  }
  // listarRanking(){
  //   return this.http.get(`${this.URL}ranking/listarRanking.php`);
  // }

  unirseRanking(codigo: Number, id_alumno: Number){
    console.log("Codigo en el service: ",codigo);
    return this.http.get(`${this.URL}ranking/unirseRanking.php?codigo=${codigo}&id_alumno=${id_alumno}` );
  }

  anadirRanking(id_r: any, name_r: any, codigo: any){
    let ranking: Ranking = {
      id_r: id_r,
      name_r: name_r,
      codigo: codigo,
  
    }
    console.log(ranking);
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }
  deleteEntregas(id_ent: number){
    console.log(id_ent);
    return this.http.get(`${this.URL}entregas/deleteEntrega.php?id_ent=${id_ent}`);
  }
  deleteAlumno(id_alumno: any, id_r: any){
    console.log(id_alumno);
    return this.http.get(`${this.URL}entregas/eliminarAlumno.php?id_alumno=${id_alumno}&id_r=${id_r}`);
  }
  
}

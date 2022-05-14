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
    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(ranking));
  }

  listarRankingProfe(ranking: Ranking) {
    return this.http.post(`${this.URL}ranking/listarRankingProfe.php`,JSON.stringify(ranking));
  }

  listarEntregas(id_r: number) {
    console.log("aaa",id_r);
    return this.http.get(`${this.URL}entregas/listarEntrega.php?id_r=${id_r}`);
  }

  listarAlumnos(id_r: number) {
    return this.http.get(`${this.URL}ranking/listarAlumnos.php?id_r=${id_r}`);
  }

  listarAlumnosID(id_r: number) {
    console.log("En Service",id_r);
    return this.http.get(`${this.URL}ranking/listarAlumnosID.php?id_r=${id_r}`);
  }

  // listarRanking(){
  //   return this.http.get(`${this.URL}ranking/listarRanking.php`);
  // }

  unirseRanking(codigo: Number, id_alumno: Number){
    console.log("Codigo en el service: ",codigo);
    return this.http.get(`${this.URL}ranking/unirseRanking.php?codigo=${codigo}&id_alumno=${id_alumno}` );
  }

  anadirRanking(id_r: any, name_r: any, codigo: any, cont_r: any){
    let ranking: Ranking = {
      id_r: id_r,
      name_r: name_r,
      codigo: codigo,
      cont_r: cont_r
    }
    console.log(ranking);
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }

  deleteEntregas(id_ent: any, id_r: any){
    console.log(id_ent);
    return this.http.get(`${this.URL}entregas/deleteEntrega.php?id_ent=${id_ent}&id_r=${id_r}`);
  }

  deleteAlumno(id_alumno: any, id_r: any){
    console.log("SERVICE ==>> ID_A",id_alumno);
    console.log("SERVICE ==>> ID_R",id_r);
    return this.http.get(`${this.URL}entregas/eliminarAlumno.php?id_alumno=${id_alumno}&id_r=${id_r}`);
  }
}

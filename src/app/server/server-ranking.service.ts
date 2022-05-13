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

  listarEntregas(entraga: Entrega) {
    return this.http.post(`${this.URL}entregas/listarEntrega.php`,JSON.stringify(entraga));
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
  deleteEntregas(id_ent: any){
    console.log(id_ent);
    return this.http.post(`${this.URL}entregas/deleteEntrega.php`,JSON.stringify(id_ent));
  }
  deleteAlumno(id_alumno: any, id_r: any){
    console.log(id_alumno);
    return this.http.get(`${this.URL}entregas/eliminarAlumno.php?id_alumno=${id_alumno}&id_r=${id_r}`);
  }
}

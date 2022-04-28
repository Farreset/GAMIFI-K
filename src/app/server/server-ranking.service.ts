import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno, Ranking } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerRankingService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarRanking(id_alumno: Number) {
    // console.log("Ranking en service: ", ranking);
    return this.http.get(`${this.URL}ranking/listarRanking.php?id_alumno=${id_alumno}`);
  }

  listarTodoRanking(ranking: Ranking) {
    return this.http.post(`${this.URL}ranking/listarTodosRanking.php`,JSON.stringify(ranking));
  }

  unirseRanking(codigo: Number, id_alumno: Number){
    console.log("Codigo en el service: ",codigo);
    return this.http.get(`${this.URL}ranking/unirseRanking.php?codigo=${codigo}&id_alumno=${id_alumno}` );
  }

  anadirRanking(id_r: any, id_alumno: any, name_r: any, codigo: any){
    let ranking: Ranking = {
      id_r: id_r,
      id_alumno: id_alumno,
      name_r: name_r,
      codigo: codigo,
    }
    // console.log(ranking);
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }

}

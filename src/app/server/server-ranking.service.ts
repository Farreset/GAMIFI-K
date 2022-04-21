import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerRankingService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarRanking(ranking: Ranking) {
    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(ranking));
  }

  listarRankingArray(){
    return this.http.get(`${this.URL}ranking/listarRanking.php`);
    }

  // listarRanking(){
  //   return this.http.get(`${this.URL}ranking/listarRanking.php`);
  // }

  unirseRanking(ranking:Ranking){
    console.log(ranking);
    return this.http.post(`${this.URL}ranking/unirseRanking.php`,JSON.stringify(ranking));
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

}

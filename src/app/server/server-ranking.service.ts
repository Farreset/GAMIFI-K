import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerRankingService {
  
  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarRanking(parametros: any) {
    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(parametros));
  }

  unirseRanking(ranking:Ranking){
    console.log(ranking);
    return this.http.post(`${this.URL}ranking/unirseRanking.php`,JSON.stringify(ranking));
  }
}
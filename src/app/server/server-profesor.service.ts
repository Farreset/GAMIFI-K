import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrega, Profe,Ranking} from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerProfesorService {
 

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarUsuario(profesor: any) {
    return this.http.post(`${this.URL}profesores/listarUsuarios.php`,JSON.stringify(profesor));
  }


  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }

  modificarProfesor(profe:Profe) {

    console.log(profe);
    return this.http.post(`${this.URL}profesores/modificarProfesor.php`,JSON.stringify(profe));
  }


  insertarProfesor(id_profesor: any, nick: any, fname: any, lname: any, mail: any, centro: any, pssw: any, psswConf: any, avatar: any){
    let profes: Profe = {
      id_profesor: id_profesor,
      nick: nick,
      fname: fname,
      lname: lname,
      centro: centro,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf,
      avatar: avatar
    }
    return this.http.post(`${this.URL}profesores/insertarProfesor.php`,JSON.stringify(profes));
  }
  editarImagen(profe: any){

    return this.http.post(`${this.URL}profesores/modificarProfesor.php`,JSON.stringify(profe));
  }

  // anadirRanking(ranking:Ranking){
  //   console.log(ranking);
  //   return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  // }
  anadirRanking(name_r: any, codigo: number, id_p: number){
    let ranking: any = {
      id_r: 0,
      name_r: name_r,
      codigo: codigo,
      id_p: id_p,
    }
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }

  anadirEntrega(nombre: any, ranking: number){
    let entrega: Entrega = {
      id_ent: 0,
      nombre: nombre,

      id_ranking: ranking,
    }
    console.log(entrega);
    return this.http.post(`${this.URL}entregas/insertarEntrega.php`,JSON.stringify(entrega));
  }

  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);

  // }

  actualizarCodigo(codigo:number, id_r: number){
    console.log(codigo, id_r);
   
   return this.http.get(`${this.URL}ranking/actualizarCodigo.php?codigo=${codigo}&id_r=${id_r}`);
 }


}


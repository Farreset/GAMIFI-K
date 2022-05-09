import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrega, Profe,Ranking} from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerProfesorService {
 

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarProfesor(profesor: any) {
    return this.http.post(`${this.URL}profesores/listarProfesor.php`,JSON.stringify(profesor));
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
  anadirRanking(name_r: any, codigo: number){
    let ranking: Ranking = {
      id_r: 0,
      name_r: name_r,
      codigo: codigo,
      cont_r: 0
    }
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }

  anadirEntrega(nombre: any){
    let entrega: Entrega = {
      id_ent: 0,
      nombre: nombre,
      puntos: 0
    }
    return this.http.post(`${this.URL}entregas/insertarEntrega.php`,JSON.stringify(entrega));
  }


  mostrarCodigo(codigo: number, name_r: string){
   
    return this.http.get(`${this.URL}ranking/mostrarCodigo.php?codigo=${codigo}&name_r=${name_r}`);
  }

  actualizarCodigo(codigo:number, id_r: number){
     console.log(codigo, id_r);
    
    return this.http.get(`${this.URL}ranking/actualizarCodigo.php?codigo=${codigo}&id_r=${id_r}`);
  }


}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from './../../server/server-ranking.service';
import { Alumno, Entrega, Ranking } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  ranking_id  = 0;
  alumno_id  = 0;
  algo: Object | undefined;

  constructor(router: Router, route: ActivatedRoute, private service: ServerAlumnoService, private serverRankingService: ServerRankingService) {

    this.route = route;
    this.router = router;
  }
  alumno:Alumno = {
    id_alumno: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }
  modificarAlumno: any = {
    id_alumno: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }

  ranking: Ranking = {
    id_r: 0,
    name_r: "",
    id_alumno: 0,
    codigo: 0
  }
  entrega: Entrega = {
    id_ent: 0,
    nombre: "",
    id_ranking: 0,
  
  }
  rankingsArray: [] | any;
  entregas: [] | any;

  ngOnInit(): void {
    this.alumno_id = Number(this.route.snapshot.paramMap.get('id_alumno'));
     this.ranking_id = Number(this.route.snapshot.paramMap.get('id_r'));
     
console.log(this.alumno_id,this.ranking_id);
    this.serverRankingService.listarEntregaAlumno(this.alumno_id,this.ranking_id).subscribe(
      (datos: any) => {
        console.log(datos);
      this.entregas = datos;
    
        
      }
    );
 
  this.serverRankingService.listarRanking(this.ranking ).subscribe(
    (datos: any) => {
    this.rankingsArray = datos;
   console.log(datos)
    }
  );
 
 }

   
}

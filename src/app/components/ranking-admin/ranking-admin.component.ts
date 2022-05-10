import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno, Entrega, Ranking } from 'src/app/interfaces/interfaz';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from 'src/app/server/server-ranking.service';

@Component({
  selector: 'app-ranking-admin',
  templateUrl: './ranking-admin.component.html',
  styleUrls: ['./ranking-admin.component.css']
})
export class RankingAdminComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  name_r = '';
  algo: Object | undefined;
  id_ranking = 0;
  
  constructor(router: Router, route: ActivatedRoute, private service: ServerAlumnoService, private serverRankingService: ServerRankingService) {
    this.route = route;
    this.router = router;
  }

  alumno: Alumno = {
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

  entrega: Entrega = {
    id_ent: 0,
    nombre: "",
    puntos: 0,
    id_ranking: 0,
  }

  alumnoArray: [] | any;
  rankingsArray: [] | any;
  entregas: [] | any;

  ngOnInit(): void {
    
    this.id_ranking = Number(this.route.snapshot.paramMap.get('id_r'));
    console.log(this.id_ranking);
    this.serverRankingService.listarAlumnos(this.id_ranking).subscribe(
      (datos: any) => {
        this.alumnoArray = datos;
        console.log(datos);
      }
    );
  }

  eliminarAlumno(id_alumno: number) {
    console.log(id_alumno);
    this.serverRankingService.deleteAlumnos(id_alumno);
  }

}

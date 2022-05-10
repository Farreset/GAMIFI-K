import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno, Ranking } from 'src/app/interfaces/interfaz';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from 'src/app/server/server-ranking.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

    router: Router;
    route: ActivatedRoute;
    miembrosArray: [] | any;

    ServerRankingService: any;
    profesorInicio: any;
    rankings: any;
    constructor(router: Router, route: ActivatedRoute, private serverRankingService: ServerRankingService, private serverAlumnoService: ServerAlumnoService) {

      this.route = route;
      this.router = router;
      this.serverRankingService = serverRankingService;

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

    ranking: Ranking [] | any = {
      id_r: 0,
      name_r: "",
      cont_r: 0,
      codigo: 0
    }

    ngOnInit(): void {
      this.alumno = {
        id_alumno: Number(this.route.snapshot.paramMap.get('id_alumno')),
         fname: String(this.route.snapshot.paramMap.get('fname')),
         lname: String(this.route.snapshot.paramMap.get('lname')),
         nick: String(this.route.snapshot.paramMap.get('nick')),
         mail: String(this.route.snapshot.paramMap.get('mail')),
         fecha: String(this.route.snapshot.paramMap.get('fecha')),
         pssw: String(this.route.snapshot.paramMap.get('pssw')),
         psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
         avatar: String(this.route.snapshot.paramMap.get('avatar'))
       };
       console.log("Alumno; ", this.alumno);

       this.serverAlumnoService.listarMiembros(this.ranking).subscribe(
        datos => {
          this.ranking = datos;
          console.log("Dentro de listar",this.ranking);
        }
      );













    }

    onSubmit() {
      this.registrarRanking();

    }

    registrarRanking(){
      this.serverRankingService.anadirRanking(this.ranking.idr_r,this.ranking.name_r,this.ranking.codigo,this.ranking.cont_r).subscribe(
           datos => this.ranking = datos
      );
   this.router.navigate(['login']);
    }
    get data() { return this.ranking.controls; }


}

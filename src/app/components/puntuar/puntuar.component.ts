import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno, Entrega } from 'src/app/interfaces/interfaz';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from 'src/app/server/server-ranking.service';

@Component({
  selector: 'app-puntuar',
  templateUrl: './puntuar.component.html',
  styleUrls: ['./puntuar.component.css']
})
export class PuntuarComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  name_r = '';
  id_ranking = 0;
  punt!: FormGroup;
  
  constructor(router: Router, route: ActivatedRoute, private service: ServerAlumnoService, private serverRankingService: ServerRankingService,private  formBuilder: FormBuilder) {
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
    id_ranking: 0,
  }

  alumnoArray: [] | any;
  rankingsArray: [] | any;
  entregas: [] | any;

  ngOnInit(): void {
    
       this.punt = this.formBuilder.group({
      punt: [''],

     });
    
     this.punt = new FormGroup({
      punt: new FormControl(''),
    })

    this.id_ranking = Number(this.route.snapshot.paramMap.get('id_r'));
    console.log('ranking',this.id_ranking);
    console.log('ranking', this.punt);

    this.serverRankingService.listarAlumnoPunt(this.id_ranking).subscribe(
      (datos: any) => {
      this.entregas = datos;
      console.log( 'aaaa',this.entregas );
   
      }
    );
  
    
  }

}

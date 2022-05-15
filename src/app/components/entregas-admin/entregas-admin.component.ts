import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from './../../server/server-ranking.service';
import { Alumno, Entrega, Ranking } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entregas-admin',
  templateUrl: './entregas-admin.component.html',
  styleUrls: ['./entregas-admin.component.css']
})
export class EntregasAdminComponent implements OnInit {
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
      id_ranking: 0,
    }
  
    alumnoArray: [] | any;
    rankingsArray: [] | any;
    entregas: [] | any;
  
    ngOnInit(): void {
   
      this.id_ranking = Number(this.route.snapshot.paramMap.get('id_r'));
      console.log('ranking',this.id_ranking);

      this.serverRankingService.listarEntregaProfe(this.id_ranking).subscribe(
        (datos: any) => {
        this.entregas = datos;
     
     
        }
      );
    
      
    }
  
  
      async eliminarEntrega(id:number,name:string){
        const { value: mensaje } = await Swal.fire({
          title: 'Estas seguro de eliminar a '+name+' del ranking?',
          text: "Para confirmar, escriba eliminar "+ name,
          input: 'text',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar'
        })
        if(mensaje==name){
          this.serverRankingService.deleteEntregas(id).subscribe(
            datos => {
              if (datos == 'OK'){
                Swal.fire(
                  'Correcto',
                  'Eliminado correctamente.',
                  'success'
                )
              }else if (datos == 'No esta'){
                Swal.fire(
                  'Error',
                  'Este alumno no existe.',
                  'error'
                )
                }
          }
        );
        }else{
                Swal.fire(
                  'Error',
                  'No se ha podido eliminar.',
                  'error'
                )
              }
    
    }
  
  
}

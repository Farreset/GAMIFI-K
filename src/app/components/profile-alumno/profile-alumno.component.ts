import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/interfaz';

@Component({
  selector: 'app-profile-alumno',
  templateUrl: './profile-alumno.component.html'
})
export class ProfileAlumnoComponent implements OnInit {

  public alumnos:Alumno[] = [] ;
  router: Router; 
  route: ActivatedRoute;
  alumno:Alumno = {
    id_alumno: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    year: "",
    pssw: "",
    psswConf: ""
    
  } 
   
  constructor(router: Router, route: ActivatedRoute) {

    this.route = route;
    this.router = router;
  }


  ngOnInit(): void {
    this.alumno = {
           id_alumno: Number(this.route.snapshot.paramMap.get('id')),
            fname: String(this.route.snapshot.paramMap.get('fname')),
            lname: String(this.route.snapshot.paramMap.get('lname')),
            nick: String(this.route.snapshot.paramMap.get('nick')),
            mail: String(this.route.snapshot.paramMap.get('mail')),
            year: String(this.route.snapshot.paramMap.get('year')),
            pssw: String(this.route.snapshot.paramMap.get('pssw')),
            psswConf: String(this.route.snapshot.paramMap.get('psswConf'))
          } 
      }
      volver(){
        
        this.router.navigate(['home']);
      }

      ranking(){
        
        this.router.navigate(['ranking']);
      }
    }
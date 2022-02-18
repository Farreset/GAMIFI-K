import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profe } from 'src/app/interfaces/interfaz';

@Component({
  selector: 'app-profile-profe',
  templateUrl: './profile-profe.component.html',
  styleUrls: ['./profile-profe.component.css']
})
export class ProfileProfeComponent implements OnInit {
  public profes:Profe[] = [] ;
  router: Router; 
  route: ActivatedRoute;
  profe:Profe = {
    id_profesor: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    centro: "",
    pssw: "",
    psswConf: "",
    
  } 
   
  constructor(router: Router, route: ActivatedRoute) {

    this.route = route;
    this.router = router;
  }


  ngOnInit(): void {
    this.profe = {
            id_profesor: Number(this.route.snapshot.paramMap.get('id_profesor')),
            fname: String(this.route.snapshot.paramMap.get('fname')),
            lname: String(this.route.snapshot.paramMap.get('lname')),
            nick: String(this.route.snapshot.paramMap.get('nick')),
            mail: String(this.route.snapshot.paramMap.get('mail')),
            centro: String(this.route.snapshot.paramMap.get('centro')),
            pssw: String(this.route.snapshot.paramMap.get('pssw')),
            psswConf: String(this.route.snapshot.paramMap.get('psswConf'))

          } 
      }
      volver(){
        
        this.router.navigate(['']);
      }

      editar(){
        this.router.navigate(['']);
      }

     


    }
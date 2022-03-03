import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ActivatedRoute, Router } from '@angular/router';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-edit-profile-profe',
  templateUrl: './edit-profile-profe.component.html',
  styleUrls: ['./edit-profile-profe.component.css']
})
export class EditProfileProfeComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }

  ngOnInit(): void {
  }
=======
}
profesorInicio = {
  mail:"" ,
  pssw:""
}

serverProfesorService: any;

constructor(router: Router, route: ActivatedRoute, serverProfesorService: ServerProfesorService) {

  this.route = route;
  this.router = router;
  this.serverProfesorService = serverProfesorService;

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

onSubmit() {
  // this.modificarProfesor();
  if(this.profe){
    this.listarProfesor();
    }
}

  listarProfesor(){
    this.profesorInicio.mail =  this.profe.mail;
    this.profesorInicio.pssw = this.profe.pssw;

    this.serverProfesorService.listarProfesor(this.profesorInicio).subscribe(
      (      datos: any) => {
        this.router.navigate(['pprofe', datos]);
      }
    );

  }

  modificarProfesor(){
    this.serverProfesorService.modificarProfesor(this.profe.id_profesor,this.profe.nick, this.profe.fname, this.profe.lname, this.profe.mail, this.profe.centro, this.profe.pssw, this.profe.psswConf).subscribe(
      (      datos: Profe)  => this.profe = datos
    );
  this.router.navigate(['login']);
  }
  // get data() { return this.profe.controls; }

  volver(){
    this.router.navigate(['pprofe']);
  }

  editar(){
    this.router.navigate(['editar-profe']);
  }
  addRank(){
>>>>>>> Stashed changes

  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';

@Component({
  selector: 'app-edit-profile-profe',
  templateUrl: './edit-profile-profe.component.html',
  styleUrls: ['./edit-profile-profe.component.css']
})
export class EditProfileProfeComponent implements OnInit {
// public profes:Profe[] = [] ;
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
serverProfesorService: any;
  myGroup: any;

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
this.myGroup = new FormGroup({
  firstName: new FormControl()
});
}

onSubmit() {
  this.modificarProfesor();

}

modificarProfesor(){
  this.serverProfesorService.modificarProfesor(this.profe.id_profesor,this.profe.nick, this.profe.fname, this.profe.lname, this.profe.mail, this.profe.centro, this.profe.pssw, this.profe.psswConf).subscribe(
    (      datos: Profe)  => this.profe = datos
  );
this.router.navigate(['login']);
}
// get data() { return this.profe.controls; }

editar(){
  this.router.navigate(['editar-profe']);
}

volver(){

  this.router.navigate(['pprofe']);
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/interfaz';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-alumno',
  templateUrl: './edit-profile-alumno.component.html',
  styleUrls: ['./edit-profile-alumno.component.css']
})
export class EditProfileAlumnoComponent implements OnInit {
// public profes:Profe[] = [] ;
router: Router;
route: ActivatedRoute;
alumno:Alumno = {
  id_alumno: 0,
  nick: '',
  fname: "",
  lname: "",
  mail: "",
  fecha: "",
  pssw: "",
  psswConf: "",

}
serverAlumnoService: any;

constructor(router: Router, route: ActivatedRoute, serverAlumnoService: ServerAlumnoService) {

  this.route = route;
  this.router = router;
  this.serverAlumnoService = serverAlumnoService;

}

ngOnInit(): void {
  this.alumno = {
    id_alumno: Number(this.route.snapshot.paramMap.get('id_profesor')),
    fname: String(this.route.snapshot.paramMap.get('fname')),
    lname: String(this.route.snapshot.paramMap.get('lname')),
    nick: String(this.route.snapshot.paramMap.get('nick')),
    mail: String(this.route.snapshot.paramMap.get('mail')),
    fecha: String(this.route.snapshot.paramMap.get('year')),
    pssw: String(this.route.snapshot.paramMap.get('pssw')),
    psswConf: String(this.route.snapshot.paramMap.get('psswConf'))
}
}

onSubmit() {
  this.modificarAlumno();

}

modificarAlumno(){
  this.serverAlumnoService.modificarProfesor(this.alumno.id_alumno,this.alumno.nick, this.alumno.fname, this.alumno.lname, this.alumno.mail, this.alumno.fecha, this.alumno.pssw, this.alumno.psswConf).subscribe(
    (      datos: Alumno)  => this.alumno = datos
  );
this.router.navigate(['login']);
}
// get data() { return this.profe.controls; }

volver(){

  this.router.navigate(['']);
}

}
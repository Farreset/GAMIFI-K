import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno,Profe } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  ServiceService: any;
  route: ActivatedRoute;
  // alumnosArray = [];
  // alumno!:FormGroup;

  // alumnos:Alumno = {
  //   id_alumno: 0,
  //   nick: "",
  //   fname:"" ,
  //   lname:"" ,
  //   year:"" ,
  //   mail:"" ,
  //   pssw:"", 
  //   psswConf:"", 
  // } 

  profesArray = [];
  profe!:FormGroup;

  profes:Profe = {
    id_profesor: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    centro:"" ,
    mail:"" ,
    pssw:"", 
    psswConf:"", 
  }  
  profesores :any;
  constructor(private formBuilder: FormBuilder, private router: Router, route: ActivatedRoute, ServiceService: ServiceService,private serverProfesorService: ServerProfesorService){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;
    this.route = route;
    this.router = router;
  };
  
  ngOnInit() : void {
    this.profe =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    // console.log(this.ServiceService)
  }

  get data() { return this.profe.controls; }
  // get data1() { return this.alumno.controls; }


   onSubmit() {
    this.listarProfesor();
    this.router.navigate(['pprofe'],this.profesores);
}

  //Funcion para conectar con el php
  listarProfesor(){
    this.serverProfesorService.listarProfesor(this.profes.mail, this.profes.pssw).subscribe(
      datos  => this.profesores = datos
    );

  }
  volver(){
    this.router.navigate(['']);
  }
  registerProfe(){
    this.router.navigate(['rprofe']);
  }
  registerAlumno(){
    this.router.navigate(['ralumno']);
  }
 
}

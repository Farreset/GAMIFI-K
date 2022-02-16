import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno,Profe } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
   
  route: ActivatedRoute;
  alumnosArray = [];
  alumno!:FormGroup;
  ServiceService: any;
  alumnos:Alumno = {
    id_alumno: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    year:"" ,
    mail:"" ,
    pssw:"", 
    psswConf:"", 
  } 
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
  constructor(private formBuilder: FormBuilder, private router: Router, route: ActivatedRoute, ServiceService: ServiceService){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;
    this.route = route;
    this.router = router;
  };
  
  ngOnInit() : void {
    this.alumno =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    console.log(this.ServiceService)
  }
 loginProfesor(){
    // this.loginService.listarProfesor(this.profes.mail).subscribe(
    //   datos  => this.profesores = datos
    // );

  }
  get data() { return this.profe.controls; }
  get data1() { return this.alumno.controls; }

  onSubmit() {   


   
     this.router.navigate(['pprofe']);
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

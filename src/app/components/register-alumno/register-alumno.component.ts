import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/validator/password.validator';
import { HttpClient } from '@angular/common/http';
// import { ServiceAlumnoService } from 'src/app/server/service-alumno.service';
import { ServiceAlumnoService } from './../../server/service-alumno.service';

>>>>>>> Stashed changes

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.component.html',
  styleUrls: ['./register-alumno.component.css']
})
export class RegisterAlumnoComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
  }

=======
  alumnosArray = [];
  alumno!:FormGroup;
  submitted = false;
  ServiceService: any;
  isValidFormSubmitted = false;

  alumnos:Alumno = {
    id_alumno: 0,
    nick: "",
    fname: "",
    lname: "",
    year: "",
    mail: "",
    pssw: "",
    psswConf: ""
  }

  alumnosTS:any;

  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private serviceAlumnoService:ServiceAlumnoService , private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };

   ngOnInit(): void {
      this.alumno =  this.formBuilder.group( {
        nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
        fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
        lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
        year:['', [Validators.required ]],
        mail:['', [Validators.required, Validators.email]],
        pssw:['', [Validators.required, Validators.minLength(8)]],
      },{
        validator: PasswordValidator('pssw', 'psswConf')
      });
    console.log(this.ServiceService)
  }

  get data() { return this.alumno.controls; }

  onSubmit() {

     this.router.navigate(['login']);
  }

  registrarProfesor(){
    this.serviceAlumnoService.insertarAlumno(this.alumnosTS.id_alumno,this.alumnosTS.nick, this.alumnosTS.fname, this.alumnosTS.lname, this.alumnosTS.mail, this.alumnosTS.year, this.alumnosTS.pssw, this.alumnosTS.psswConf).subscribe(
      datos  => this.alumnosTS = datos
    );

  }

  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
>>>>>>> Stashed changes
}

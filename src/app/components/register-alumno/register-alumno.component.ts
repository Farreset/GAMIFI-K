import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Alumno, Profe } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/password.validator';
import { HttpClient } from '@angular/common/http';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';

@Component({
  selector: 'app-register-profe',
  templateUrl: './register-profe.component.html',
  styleUrls: ['./register-profe.component.css']
})
export class RegisterAlumnoComponent implements OnInit {
  alumnosArray = [];
  alumno!:FormGroup;
  submitted = false;
  ServiceService: any;
  isValidFormSubmitted = false;

  alumnos:Alumno = {
    id_alumno: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    year:"" ,
    mail:"" ,
    pssw:"" ,
    psswConf: ""
  }
  alumnos: any;


  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private serverProfesorService: ServerProfesorService, private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };
  ngOnInit(): void {
    this.alumno =  this.formBuilder.group( {
      nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
      lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
      year:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      mail:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      pssw:['', [Validators.required, Validators.minLength(8)]],
      psswConf:['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: PasswordValidator('pssw', 'psswConf')
    });

    //Se llama a la funcion registrarProfesor
   

  }
   onSubmit() {
    this.registrarAlumno();
    this.router.navigate(['login']);
}

  //Funcion para conectar con el php
  registrarAlumno(){
    this.serverAlumnoService.insertarAlumno(this.alumnos.id_alumno,this.alumnos.nick, this.alumnos.fname, this.alumnos.lname, this.alumnos.mail, this.alumnos.centro, this.alumnos.pssw, this.alumnos.psswConf).subscribe(
      datos  => this.alumnos = datos
    );

  }
  get data() { return this.alumno.controls; }


  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
}
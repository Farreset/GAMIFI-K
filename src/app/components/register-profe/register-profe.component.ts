import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/password.validator';
import { HttpClient } from '@angular/common/http';
import { RegistrarProfesorService } from 'src/app/server/registrar-profesor.service';

@Component({
  selector: 'app-register-profe',
  templateUrl: './register-profe.component.html',
  styleUrls: ['./register-profe.component.css']
})
export class RegisterProfeComponent implements OnInit {
  profesArray = [];
  profe!:FormGroup;
  submitted = false;
  ServiceService: any;
  isValidFormSubmitted = false;

  profes:Profe = {
    id_profesor: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    centro:"" ,
    mail:"" ,
    pssw:"" ,
    psswConf: ""
  }
  profesores: any;


  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private registrarProfesorService: RegistrarProfesorService, private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };
  ngOnInit(): void {
    this.profe =  this.formBuilder.group( {
      nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
      lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
      centro:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      mail:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      pssw:['', [Validators.required, Validators.minLength(8)]],
      psswConf:['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: PasswordValidator('pssw', 'psswConf')
    });

    //Se llama a la funcion registrarProfesor
   

  }
   onSubmit() {
    this.registrarProfesor();
    this.router.navigate(['login']);
}

  //Funcion para conectar con el php
  registrarProfesor(){
    this.registrarProfesorService.insertarProfesor(this.profes.id_profesor,this.profes.nick, this.profes.fname, this.profes.lname, this.profes.mail, this.profes.centro, this.profes.pssw, this.profes.psswConf).subscribe(
      datos  => this.profesores = datos
    );

  }
  get data() { return this.profe.controls; }


  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
}



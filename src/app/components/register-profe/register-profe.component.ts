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

  //No se si esta variable tiene que ser asi (@AndresXW5)
  profesores: Object | undefined;

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
    this.registrarProfesor();

  }

  //Funcion para conectar con el php
  registrarProfesor(){
    this.registrarProfesorService.registrarProfesor().subscribe(
      datos  => this.profesores = datos
    );

  }
  get data() { return this.profe.controls; }

  onSubmit() {
    this.router.navigate(['login', this.profes]);
}


  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
}



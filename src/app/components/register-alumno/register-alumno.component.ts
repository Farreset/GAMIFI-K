import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.component.html',
  styleUrls: ['./register-alumno.component.css']
})
export class RegisterAlumnoComponent implements OnInit {
  alumnosArray = [];
  alumno!:FormGroup;
  ServiceService: any;
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
  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService){
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
      });
    console.log(this.ServiceService)
  }

  get data() { return this.alumno.controls; }

  onSubmit() {   

    
 
     this.router.navigate(['login', this.alumnos]);
  }
  volver(){
    
    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
}
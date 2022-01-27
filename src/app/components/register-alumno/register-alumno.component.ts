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
  alumno:FormGroup;
  ServiceService: any;
  alumnos:Alumno = {
    id: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    year:"" ,
    mail:"" ,
    pssw:""  
  } 
  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;
    this.alumno = new FormGroup({
      nick: new FormControl('', [Validators.required, Validators.minLength(2)]),
      fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      year: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mail: new FormControl('', [Validators.required, Validators.minLength(2)]),
      pssw: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  };
  ngOnInit() {
    console.log(this.ServiceService)
  }

  get data() { return this.alumno.controls; }

  onSubmit() {   

    if(this.alumnos.fname.trim().length === 0){
      return;
    }
    if(this.alumnos.lname.trim().length === 0){
      return;
    }
    if(this.alumnos.year.trim().length === 0){
      return;
    }
    if(this.alumnos.mail.trim().length === 0){
      return;
    }
    if(this.alumnos.nick.trim().length === 0){
      return;
    }
    if(this.alumnos.pssw.trim().length === 0){
      return;
    }
 
     this.router.navigate(['login', this.alumnos]);
  }
  volver(){
    
    this.router.navigate(['home']);
  }
}
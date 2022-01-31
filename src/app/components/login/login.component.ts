import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/interfaz';
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
    id: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    year:"" ,
    mail:"" ,
    pssw:""  
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
      pssw: ['', [Validators.required]],
    });
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
 
     this.router.navigate(['home', this.alumnos]);
  }

  volver(){
    this.router.navigate(['']);
  }
  register(){
    this.router.navigate(['rprofe']);
  }
  pprofe(){
    this.router.navigate(['pprofe']);
  }
}

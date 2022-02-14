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
  profeArray = [];
  profe!:FormGroup;
  ServiceService: any;
  alumnos:Alumno = {
    id_alumno: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    fecha:"" ,
    mail:"" ,
    pssw:"", 
    psswConf:"", 
  } 
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
    this.profe =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    console.log(this.ServiceService)
  }

  get data() { return this.profe.controls; }

  onSubmit() {   


    // if(this.profe.mail.trim().length === 0){
    //   return;
    // }
  
    // if(this.profe.pssw.trim().length === 0){
    //   return;
    // }
 
     this.router.navigate(['pprofe', this.profes]);
  }

  volver(){
    this.router.navigate(['']);
  }
  register(){
    this.router.navigate(['rprofe']);
  }
 
}

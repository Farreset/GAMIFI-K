import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

>>>>>>> Stashed changes

@Component({
  selector: 'app-register-profe',
  templateUrl: './register-profe.component.html',
  styleUrls: ['./register-profe.component.css']
})
export class RegisterProfeComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
=======
  profesArray = [];
  profe!:FormGroup;
  ServiceService: any;
  profes:Profe = {
    id: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    centro:"" ,
    mail:"" ,
    pssw:""
  }

  profesores = null;

  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private registrarProfesorService: RegistrarProfesorService, private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };
  ngOnInit(): void {
    this.profe =  this.formBuilder.group( {
      nick:['', [Validators.required, Validators.minLength(2)]],
      fname:['', [Validators.required, Validators.minLength(2)]],
      lname:['', [Validators.required, Validators.minLength(2)]],
      centro:['', [Validators.required, Validators.minLength(2)]],
      mail:['', [Validators.required, Validators.minLength(2)]],
      pssw:['', [Validators.required, Validators.minLength(2)]],
    });
    console.log(this.ServiceService)

    //Se llama a la funcion registrarProfesor
    this.registrarProfesor();

  }

  registrarProfesor(){
    // this.administrarRankingService.listarRankings.()subscribe(  );
    this.registrarProfesorService.registrarProfesor().subscribe(
      (datos: null) => this.profesores = datos
    );

  }


  get data() { return this.profe.controls; }

  onSubmit() {

    if(this.profes.fname.trim().length === 0){
      return;
    }
    if(this.profes.lname.trim().length === 0){
      return;
    }
    if(this.profes.centro.trim().length === 0){
      return;
    }
    if(this.profes.mail.trim().length === 0){
      return;
    }
    if(this.profes.nick.trim().length === 0){
      return;
    }
    if(this.profes.pssw.trim().length === 0){
      return;
    }

     this.router.navigate(['login', this.profes]);
  }
  volver(){

    this.router.navigate(['']);
>>>>>>> Stashed changes
  }

<<<<<<< Updated upstream
=======
    this.router.navigate(['login']);
  }
>>>>>>> Stashed changes
}

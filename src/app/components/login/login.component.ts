import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
<<<<<<< Updated upstream
=======
  ServiceService: any;
  route: ActivatedRoute;
  alumnosArray = [];
  alumno!:FormGroup;

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
  alumnoInicio = {
    mail:"" ,
    pssw:""
  }
  alumnoParam: any;

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
  profesorInicio = {
    mail:"" ,
    pssw:""
  }
  profesores: any;

  constructor(private formBuilder: FormBuilder, private router: Router, route: ActivatedRoute, ServiceService: ServiceService,private serverProfesorService: ServerProfesorService, private serverAlumnoService: ServerAlumnoService){
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
    this.alumno =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    // console.log(this.ServiceService)
  }

  get data() { if(this.profe){
    return this.profe.controls;}
  else{
    return this.alumno.controls;
  } }

>>>>>>> Stashed changes

  constructor() { }

<<<<<<< Updated upstream
  ngOnInit(): void {
  }

=======
   onSubmit() {
    if(this.profe){
    this.listarProfesor();
    }else{
    this.listarAlumno();
    }
    }

  //Funcion para conectar con el php
  listarProfesor(){

    this.profesorInicio.mail =  this.profes.mail;
    this.profesorInicio.pssw = this.profes.pssw;

    this.serverProfesorService.listarProfesor(this.profesorInicio).subscribe(
      datos  => {
        this.router.navigate(['pprofe', datos]);
      }
    );

  }
  listarAlumno(){

    this.alumnoInicio.mail =  this.alumnos.mail;
    this.alumnoInicio.pssw = this.alumnos.pssw;

    this.serverAlumnoService.listarAlumno(this.alumnoInicio).subscribe(
      datos  => {
        this.router.navigate(['palumno', datos]);
      }
    );

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

>>>>>>> Stashed changes
}

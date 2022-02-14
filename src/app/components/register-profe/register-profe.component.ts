import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
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
  ServiceService: any;
<<<<<<< Updated upstream
  profes:Profe = {
    id: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    centro:"" ,
    mail:"" ,
    pssw:""
  }
=======
  isValidFormSubmitted = false;

>>>>>>> Stashed changes

  //No se si esta variable tiene que ser asi
  profesores: Object | undefined;

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
      datos  => this.profesores = datos
    );

  }


  get data() { return this.profe.controls; }

  onSubmit() {
<<<<<<< Updated upstream
=======
    // this.router.navigate(['pprofe', this.profes]);
}
>>>>>>> Stashed changes

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
  }

}
<<<<<<< Updated upstream
=======

























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// import { Component, OnInit } from '@angular/core';
// import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
// import { Profe } from 'src/app/interfaces/interfaz';
// import { ServiceService } from 'src/app/server/service.service';
// import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
// import { PasswordValidator } from 'src/app/validator/password.validator';
// import { HttpClient } from '@angular/common/http';
// import { RegistrarProfesorService } from 'src/app/server/registrar-profesor.service';

// @Component({
//   selector: 'app-register-profe',
//   templateUrl: './register-profe.component.html',
//   styleUrls: ['./register-profe.component.css']
// })
// export class RegisterProfeComponent implements OnInit {
//   profesArray = [];
//   profe!:FormGroup;
//   submitted = false;
//   ServiceService: any;
//   isValidFormSubmitted = false;
//   id=0;
//   profes:Profe = {
//     id_profesor: 0,
//     nick: "",
//     fname:"" ,
//     lname:"" ,
//     centro:"" ,
//     mail:"" ,
//     pssw:"" ,
//     psswConf: ""
//   }

//   //No se si esta variable tiene que ser asi (@AndresXW5)
//   // profes: null;

//   constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private registrarProfesorService: RegistrarProfesorService, private http: HttpClient){
//     this.formBuilder = formBuilder;
//     this.ServiceService = ServiceService;

//   };
//   ngOnInit(): void {
//     this.profe =  this.formBuilder.group( {
//       nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
//       fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
//       lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
//       centro:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
//       mail:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
//       pssw:['', [Validators.required, Validators.minLength(8)]],
//       psswConf:['', [Validators.required, Validators.minLength(8)]]

//       this.
//     }, {
//       validator: PasswordValidator('pssw', 'psswConf')
//     });


//   }

//   get data() { return this.profe.controls; }

//   onSubmit() {
//     this.registrarProfesorService.registrarProfesor().subscribe(
//       datos  => this.profes = datos
//     );

//       console.log(this.profes);

// this.router.navigate(['login', this.profes]);
// }

//   // async registrarProfesor(){
//     // this.id = await this.pedirNombre();

//   //   if (this.profe.id_profesor) {
//   //     this.registrarProfesorService.registrarProfesor(this.id_profesor).subscribe(
//   //       datos => {
//   //         // if (datos['resultado'] == 'OK') {
//   //         //   this.listarRankings();
//   //         // }
//   //       }
//   //     );
//   //   } else {

//   // }
//   // }


//   volver(){

//     this.router.navigate(['']);
//   }
//   login(){

//     this.router.navigate(['login']);
//   }
// }


>>>>>>> Stashed changes

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { PasswordValidator } from 'src/app/validator/password.validator';
import { Alumno } from 'src/app/interfaces/interfaz';
import { Ranking } from 'src/app/interfaces/interfaz';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile-alumno',
  templateUrl: './profile-alumno.component.html'
})
export class ProfileAlumnoComponent implements OnInit {

<<<<<<< Updated upstream
  router: Router;
  route: ActivatedRoute;
  

  constructor(private fb: FormBuilder, router: Router, route: ActivatedRoute, private service: ServerAlumnoService) {

    this.route = route;
    this.router = router;
  }
=======
  public alumnos:Alumno[] = [] ;
  public rankings:Ranking[] = [] ;

  router: Router;
  route: ActivatedRoute;
>>>>>>> Stashed changes

  alumno: Alumno = {
    id_alumno: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }
<<<<<<< Updated upstream
  modificarAlumno: any = {
    id_alumno: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }
  changePassword: any = {
    updatePassw: "",
    newPw: "",
    confirm: ""
=======

  ranking: Ranking = {
    id_r: 0,
    name_r: '',
    cont_r: 0

  }

  // serverAlumnoService: any;
  modificarAlumno: any;


  constructor(router: Router, route: ActivatedRoute, private serverAlumnoService: ServerAlumnoService) {

    this.route = route;
    this.router = router;
>>>>>>> Stashed changes
  }



  ngOnInit(): void {
    this.alumno = {
<<<<<<< Updated upstream
      id_alumno: Number(this.route.snapshot.paramMap.get('id_alumno')),
      fname: String(this.route.snapshot.paramMap.get('fname')),
      lname: String(this.route.snapshot.paramMap.get('lname')),
      nick: String(this.route.snapshot.paramMap.get('nick')),
      mail: String(this.route.snapshot.paramMap.get('mail')),
      fecha: String(this.route.snapshot.paramMap.get('fecha')),
      pssw: String(this.route.snapshot.paramMap.get('pssw')),
      psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
      avatar: String(this.route.snapshot.paramMap.get('avatar'))
    }

  }

  volver() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  ranking() {

    this.router.navigate(['ranking']);
  }

  editar() {
    this.router.navigate(['editar-alumno', this.alumno]);

  }

  addRank() {

  }

  async editarImagen() {

    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = reader.result;
        this.modificarAlumno.id_alumno = this.alumno.id_alumno;
        let old = this.modificarAlumno.avatar;
        this.modificarAlumno = this.alumno;
        this.modificarAlumno.avatar = imageUrl;

        this.alumno = this.modificarAlumno;
        console.log(this.alumno);
        this.service.editarImagen(this.alumno).subscribe(
          datos => {
            if (datos == 'OK') {
              localStorage.setItem('usuario', JSON.stringify(this.alumno));
              Swal.fire(
                'Correcto',
              )
            } else {
              this.alumno = old;
              Swal.fire(
                'Error',
              )
            }
          }
        );
      }
      reader.readAsDataURL(file);
    }
  }
  async modifyPassword() {
    const { value: formValues } = await Swal.fire({
      title: 'Cambiar la contraseña',
      html:
        '<label>Contraseña actual</label>' +
        '<input class="form-control" id="passw" type="password" placeholder="Contraseña actual" maxlenght>' +
        '<label>Nueva Contraseña</label>' +
        '<input class="form-control" id="newPassw" type="password" placeholder="Contraseña actual" maxlenght>' +
        '<label>Confirmar nueve Contraseña</label>' +
        '<input class="form-control" id="confNewPassw" type="password" placeholder="Contraseña actual" maxlenght>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById("passw") as HTMLFormElement).value,
          (document.getElementById("newPassw") as HTMLFormElement).value,
          (document.getElementById("confNewPassw") as HTMLFormElement).value
        ]
      }
    })
    if (formValues) {
      if (formValues[0] != this.alumno.pssw) {
        console.log('contrasenia actual no coinside');

      }
      else if (formValues[1] != formValues[2]) {
        console.log('contrasenia nueva no coinside');

      }
      else {
        this.alumno.pssw = formValues[1];
        this.service.modificarAlumno(this.alumno).subscribe(
          (datos) => {
            if (datos == 'OK') {
              console.log('ok');
            }else{
              console.log('nooo');
            }
          }
        );
      }
    }
  }


}


=======
           id_alumno: Number(this.route.snapshot.paramMap.get('id')),
            fname: String(this.route.snapshot.paramMap.get('fname')),
            lname: String(this.route.snapshot.paramMap.get('lname')),
            nick: String(this.route.snapshot.paramMap.get('nick')),
            mail: String(this.route.snapshot.paramMap.get('mail')),
            fecha: String(this.route.snapshot.paramMap.get('fecha')),
            pssw: String(this.route.snapshot.paramMap.get('pssw')),
            psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
            avatar: String(this.route.snapshot.paramMap.get('avatar'))
          }

    this.ranking = {
            id_r: Number(this.route.snapshot.paramMap.get('id_r')),
            name_r: String(this.route.snapshot.paramMap.get('name_r')),
            cont_r: Number(this.route.snapshot.paramMap.get('cont_r'))
    }
    console.log(this.ranking);
  }

      listarRanking(){
        this.serverAlumnoService.listarRanking(this.ranking).subscribe(
          datos => {
            this.router.navigate(['palumno', datos]);
          }

        )


      }

      // listarAlumno(){

      //   // this.alumnoInicio.mail =  this.alumnos.mail;
      //   // this.alumnoInicio.pssw = this.alumnos.pssw;

      //   this.serverAlumnoService.listarAlumno(this.alumnoInicio).subscribe(
      //     datos  => {
      //       this.router.navigate(['palumno', datos]);
      //     }
      //   );

      // }

      volver(){
        this.router.navigate(['']);
      }

      ir_ranking(){
        this.router.navigate(['ranking']);
      }

      editar(){
        this.router.navigate(['editar-alumno', this.alumno]);
      }

      addRank(){

      }

      // async editarImagen() {

      //   const { value: file } = await Swal.fire({
      //     title: 'Select image',
      //     input: 'file',
      //     inputAttributes: {
      //       'accept': 'image/*',
      //       'aria-label': 'Upload your profile picture'
      //     }
      //   })

      //   if (file) {
      //       const reader = new FileReader()
      //       reader.onload = (e) => {
      //         const imageUrl = reader.result;
      //         let old = this.modificarAlumno.avatar;
      //         this.modificarAlumno.avatar = imageUrl;
      //         this.serverAlumnoService.editarImagen(this.modificarAlumno).subscribe(
      //           (          datos: string)  => {
      //             if(datos == 'ok'){
      //               localStorage.setItem('usuario', JSON.stringify(this.modificarAlumno));
      //               Swal.fire(
      //                 'Correcto',
      //               )
      //             }else{
      //               this.modificarAlumno.avatar = old;
      //               Swal.fire(
      //                 'Error',
      //             )
      //           }
      //         }
      //         );
      //       }
      //       reader.readAsDataURL(file);
      //   }
      // }
    }
>>>>>>> Stashed changes

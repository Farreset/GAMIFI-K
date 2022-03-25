import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { Alumno } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-alumno',
  templateUrl: './profile-alumno.component.html'
})
export class ProfileAlumnoComponent implements OnInit {

  router: Router; 
  route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute, private service: ServerAlumnoService) {

    this.route = route;
    this.router = router;
  }
  
  alumno:Alumno = {
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
   
 


  ngOnInit(): void {
    this.alumno = {
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
      volver(){
        localStorage.clear();
        this.router.navigate(['']);
      }

      ranking(){
        
        this.router.navigate(['ranking']);
      }

      editar(){
        this.router.navigate(['editar-alumno', this.alumno]);

      }
      addRank(){

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
                  if(datos == 'OK'){
                    localStorage.setItem('usuario', JSON.stringify(this.alumno));
                    Swal.fire(
                      'Correcto',
                    )
                  }else{
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

        const { value: password } = await Swal.fire({
          title: 'Cambia la contraseña',
          html: `<form class="container" [formGroup]="pwChangeForm">
          <label for="current">Contraseña actual</label>
          <input class="form-control" id="current" formControlName="current" type="password" required><br />
      
          <label for="newPW">Nueva contraseña </label>
          <input id="newPW" class="form-control" formControlName="newPW" type="password" required><br/>
       
      
          <label for="confirm">Confirmar nueva contraseña</label>
          <input id="confirm" class="form-control" formControlName="confirm" type="password" required><br />
        
      
          
      </form>`,
        //   preConfirm: () => {
        //     const password2 = Swal.getPopup().querySelector('#password2').value
        //     const password = Swal.getPopup().querySelector('#password').value
        //     const password3 = Swal.getPopup().querySelector('#password3').value
        //     if (!password || !password2) {
        //       Swal.showValidationMessage(`Please enter login and password`)
        //     }
        //     return { password2: password2, password: password }
        //   }
        })
        
      
        // if (password ) {
        //     const reader = new FileReader()
        //     reader.onload = (e) => {
        //       const imageUrl = reader.result;
        //       this.modificarProfesor.id_profesor = this.profe.id_profesor;
        //       let old = this.modificarProfesor.password;
        //       this.modificarProfesor = this.profe;
        //       this.modificarProfesor.password = imageUrl;
    
        //       this.profe = this.modificarProfesor;
        //       console.log(this.profe);
        //       this.service.editarImagen(this.profe).subscribe(
        //         datos => {
        //           if(datos == 'OK'){
        //             localStorage.setItem('usuario', JSON.stringify(this.profe));
        //             Swal.fire(
        //               'Correcto',
        //             )
        //           }else{
        //             this.profe = old;
        //             Swal.fire(
        //               'Error',
        //           )
        //         }
        //       }
        //       );
        //     }  
        //     reader.readAsDataURL(password);
        // }
     }
    }
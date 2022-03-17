import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-alumno',
  templateUrl: './profile-alumno.component.html'
})
export class ProfileAlumnoComponent implements OnInit {

  public alumnos:Alumno[] = [] ;
  router: Router; 
  route: ActivatedRoute;
  alumno:Alumno = {
    id_alumno: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: ""
    
  } 
   
  constructor(router: Router, route: ActivatedRoute) {

    this.route = route;
    this.router = router;
  }


  ngOnInit(): void {
    this.alumno = {
           id_alumno: Number(this.route.snapshot.paramMap.get('id')),
            fname: String(this.route.snapshot.paramMap.get('fname')),
            lname: String(this.route.snapshot.paramMap.get('lname')),
            nick: String(this.route.snapshot.paramMap.get('nick')),
            mail: String(this.route.snapshot.paramMap.get('mail')),
            fecha: String(this.route.snapshot.paramMap.get('fecha')),
            pssw: String(this.route.snapshot.paramMap.get('pssw')),
            psswConf: String(this.route.snapshot.paramMap.get('psswConf'))
          } 
      }
      volver(){
        
        this.router.navigate(['home']);
      }

      ranking(){
        
        this.router.navigate(['ranking']);
      }

      modificar(){
        
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
        
        // if (file) {
        //     const reader = new FileReader()
        //     reader.onload = (e) => {
        //       const imageUrl = reader.result;
        //       let old = this.modificarProfesor.avatar;
        //       this.modificarProfesor.avatar = imageUrl;
        //       this.serverProfesorService.editarImagen(this.modificarProfesor).subscribe(
        //         (          datos: string)  => {
        //           if(datos == 'ok'){
        //             localStorage.setItem('usuario', JSON.stringify(this.modificarProfesor));
        //             Swal.fire(
        //               'Correcto',
        //             )
        //           }else{
        //             this.modificarProfesor.avatar = old;
        //             Swal.fire(
        //               'Error',
        //           )
        //         }
        //       }
        //       );
        //     }  
        //     reader.readAsDataURL(file);
        // }
      }
    }
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
    psswConf: "",
    avatar: ""
    
  } 
  serverAlumnoService: any;
  modificarAlumno: any;
  
   
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
            psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
            avatar: String(this.route.snapshot.paramMap.get('avatar'))
          } 
      }
      volver(){
        
        this.router.navigate(['']);
      }

      ranking(){
        
        this.router.navigate(['ranking']);
      }

      editar(){
        this.router.navigate(['editar-alumno', this.alumno]);


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
              let old = this.modificarAlumno.avatar;
              this.modificarAlumno.avatar = imageUrl;
              this.serverAlumnoService.editarImagen(this.modificarAlumno).subscribe(
                (          datos: string)  => {
                  if(datos == 'ok'){
                    localStorage.setItem('usuario', JSON.stringify(this.modificarAlumno));
                    Swal.fire(
                      'Correcto',
                    )
                  }else{
                    this.modificarAlumno.avatar = old;
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
    }
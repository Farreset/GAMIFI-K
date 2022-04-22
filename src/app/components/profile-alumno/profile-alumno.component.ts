import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from './../../server/server-ranking.service';
import { Alumno, Ranking } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-alumno',
  templateUrl: './profile-alumno.component.html'
})
export class ProfileAlumnoComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  name_r  = '';
  algo: Object | undefined;


  constructor(router: Router, route: ActivatedRoute, private service: ServerAlumnoService, private serverRankingService: ServerRankingService) {

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

  ranking: Ranking = {
    id_r: 0,
    name_r: "",
    cont_r: 0,
    codigo: 0
  }

  // rankingList: Ranking[] = [];


  ranking_=['Queso','Macarrones','Tomate','Virria'];
  // ListRanking = [this.ranking.name_r, 'name_r', 'cont_r',];
  ListRanking = ['id_r', 'name_r', 'cont_r',];

  rankingsArray: [] | any;

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
          };
          console.log(this.alumno);

    // this.ranking = {
    //         id_r: Number(this.route.snapshot.paramMap.get('id_r')),
    //         name_r: String(this.route.snapshot.paramMap.get('name_r')),
    //         cont_r: Number(this.route.snapshot.paramMap.get('cont_r'))
    //       };

          // this.listar_ranking();
    this.serverRankingService.listarRanking(this.ranking).subscribe(
            (datos: any) => {
              this.ranking = datos;
              console.log(this.ranking);
            }
          );

    //Listar Rankings del ARRAY
    this.serverRankingService.listarRankingArray().subscribe(
            datos => {
            this.rankingsArray = datos;
            // console.log(this.rankingsArray);
            }
      );


///////////////////////////////////////////////////////////////////caste
      // this.ranking = {
      //   id_r: Number(this.route.snapshot.paramMap.get('id_r')),
      //   name_r: String(this.route.snapshot.paramMap.get('name_r')),
      //   cont_r: Number(this.route.snapshot.paramMap.get('cont_r')),
      //   codigo: Number(this.route.snapshot.paramMap.get('codigo'))
      //       }
      //   console.log(this.ranking);

      //   this.name_r = String(this.route.snapshot.paramMap.get('name_r'));
      //   this.serverRankingService.listarRanking(this.name_r).subscribe(
      //     datos => {
      //       if(datos == 'No ranking') {
      //         console.log(datos);
      //         Swal.fire(
      //           'Error',
      //           'No existe ningun ranking'
      //         ).then((result) => {
      //           this.router.navigate(['palumno']);
      //         })
      //       }else{
      //         this.algo = datos;
      //       }
      //     }
      //   )
      // }
////////////////////////////////////////////////////


    }




      volver(){
        localStorage.clear();
        this.router.navigate(['']);
      }

      _ranking(){

        this.router.navigate(['ranking']);
      }

      listar_ranking(){
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
      async unirseRanking() {

        const { value: codigo } = await Swal.fire({
          title: 'Unirse ranking',
          input: 'text',
          text: 'Introduzca el codigo para unirte'
        })
            this.serverRankingService.unirseRanking(this.ranking).subscribe(
              datos => {
                if(datos == 'No existe'){
                  Swal.fire(
                    'Error',
                    'No existe.',
                    'error'
                  )
                }else if (datos == 'Error'){
                  Swal.fire(
                    'Error',
                    'Ya estas en este ranking.',
                    'error'
                  )
                }
            }
          );
      }

      //Modificar contraseña
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


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from './../../server/server-ranking.service';
import { Alumno, Entrega, Ranking } from 'src/app/interfaces/interfaz';
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
    id_alumno: 0,
    cont_r: 0,
    codigo: 0
  }
  entrega: Entrega = {
    id_ent: 0,
    nombre: "",
    puntos: 0,
    id_ranking: 0,

  }
  // rankingList: Ranking[] = [];

  rankingsArray: [] | any;
  entregas: [] | any;
  numero_entregas = 0;

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




    //Listar Rankings del ARRAY
    this.ranking.id_alumno = this.alumno.id_alumno;
    this.serverRankingService.listarRanking(this.ranking).subscribe(
      (datos: any) => {
      this.rankingsArray = datos;
        console.log(datos);
        console.log(this.rankingsArray);
      }
    );

    this.serverRankingService.listarEntregas(this.entregas ).subscribe(
        (datos: any) => {
        this.entregas = datos;
        this.numero_entregas = this.entregas.length;
          console.log(this.entregas);
        }
      );
    }



      volver(){
        localStorage.clear();
        this.router.navigate(['']);
      }
      _ranking(){
        this.router.navigate(['ranking']);
      }
      listar_ranking(){
        this.router.navigate(['ranking',this.alumno]);
      }
      listar_entregas(){
        this.router.navigate(['entregas']);
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
            // console.log("El codigo de la BD es: ", this.ranking);   //this.ranking.codigo

          if(codigo){
            console.log("El codigo introducido es: ", codigo);
            this.serverRankingService.unirseRanking(codigo, this.alumno.id_alumno).subscribe(
              datos => {
                if (datos == 'OK'){
                  Swal.fire(
                    'Enhorabuena!!',
                    'Te has unido correctamente.',
                    'success'
                  )
                }else if (datos == 'No esta'){
                  Swal.fire(
                    'Error',
                    'Este ranking no existe.',
                    'error'
                  )
                }else{
                  Swal.fire(
                    'Error',
                    'Ya perteneces a ese ranking.',
                    'error'
                  )
                }
            }
          );
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


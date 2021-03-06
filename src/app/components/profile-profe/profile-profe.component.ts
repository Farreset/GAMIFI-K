import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrega, Profe, Ranking } from 'src/app/interfaces/interfaz';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
import { FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServerRankingService } from 'src/app/server/server-ranking.service';

@Component({
  selector: 'app-profile-profe',
  templateUrl: './profile-profe.component.html',
  styleUrls: ['./profile-profe.component.css']
})
export class ProfileProfeComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  profesGrup!: FormGroup;

  serverProfesorService: any;
  profesorInicio: any;
  formBuilder: any;
  rankings: any;
  constructor(router: Router, route: ActivatedRoute, private service: ServerProfesorService, private serverRankingService: ServerRankingService) {

    this.route = route;
    this.router = router;
    this.serverProfesorService = service;

  }
  profe: Profe = {
    id_profesor: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    centro: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }

  modificarProfesor: any = {
    id_profesor: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }

  addRank: any = {
    name_r: "",
    codigo: 0
  }

  ranking: Ranking[] | any = {
    name_r: "",
    id_r: 0,
    cont_r: 0,
    codigo: 0
  }

  entrega: Entrega[] | any = {
    id: 0,
    nombre: "",
    puntos: 0
  }

  rankingsArray: [] | any;

  ngOnInit(): void {
    this.profe = {
      id_profesor: Number(this.route.snapshot.paramMap.get('id_profesor')),
      fname: String(this.route.snapshot.paramMap.get('fname')),
      lname: String(this.route.snapshot.paramMap.get('lname')),
      nick: String(this.route.snapshot.paramMap.get('nick')),
      mail: String(this.route.snapshot.paramMap.get('mail')),
      centro: String(this.route.snapshot.paramMap.get('centro')),
      pssw: String(this.route.snapshot.paramMap.get('pssw')),
      psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
      avatar: String(this.route.snapshot.paramMap.get('avatar'))

    }

    //Listar Rankings del ARRAY
    this.ranking.id_profesor = this.profe.id_profesor;
    this.serverRankingService.listarRankingProfe(this.ranking).subscribe(
      (datos: any) => {
        this.rankingsArray = datos;
        console.log('ranking profe',datos);
      }
    );

  
  }

  onSubmit() {
    this.registrarRanking();

  }

  registrarRanking() {
    this.serverProfesorService.insertarProfesor(this.ranking.name_r).subscribe(
      (datos: any) => this.rankings = datos
    );
    this.router.navigate(['login']);
  }
  get data() { return this.ranking.controls; }

  volver() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  editar() {
    this.router.navigate(['editar-profe', this.profe]);
  }

  verMiembros(){
    this.router.navigate(['ranking']);
  };

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
        this.modificarProfesor.id_profesor = this.profe.id_profesor;
        let old = this.modificarProfesor.avatar;
        this.modificarProfesor = this.profe;
        this.modificarProfesor.avatar = imageUrl;

        this.profe = this.modificarProfesor;
        console.log(this.profe);
        this.service.editarImagen(this.profe).subscribe(
          datos => {
            if (datos == 'OK') {
              localStorage.setItem('usuario', JSON.stringify(this.profe));
              Swal.fire(
                'Correcto',
              )
            } else {
              this.profe = old;
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

  //Modificar Contrase??a
  async modifyPassword() {
    const { value: formValues } = await Swal.fire({
      title: 'Cambiar la contrase??a',
      html:
        '<label>Contrase??a actual</label>' +
        '<input class="form-control" id="passw" type="password" placeholder="Contrase??a actual" maxlenght>' +
        '<label>Nueva Contrase??a</label>' +
        '<input class="form-control" id="newPassw" type="password" placeholder="Contrase??a actual" maxlenght>' +
        '<label>Confirmar nueve Contrase??a</label>' +
        '<input class="form-control" id="confNewPassw" type="password" placeholder="Contrase??a actual" maxlenght>',
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
      if (formValues[0] != this.profe.pssw) {
        console.log('contrasenia actual no coinside');

      }
      else if (formValues[1] != formValues[2]) {
        console.log('contrasenia nueva no coinside');

      }
      else {
        this.profe.pssw = formValues[1];
        this.service.modificarProfesor(this.profe).subscribe(
          (datos) => {
            if (datos == 'OK') {
              console.log('ok');
            } else {
              console.log('nooo');
            }
          }
        );
      }
    }
  }

  async anadirRanking() {

    const { value: name_r } = await Swal.fire({

      title: 'Asigne un nombre al ranking',
      input: 'text',
      text: ''

    })
    if (name_r) {
      let codigo = this.randomCodigo();
      console.log(name_r);
      console.log(codigo);
      this.service.anadirRanking(name_r, Number(codigo), this.profe.id_profesor).subscribe(
        datos => {
          if (datos == 'OK') {
            Swal.fire(
              'Correcto',
            )
          } else {
            Swal.fire(
              'Error',
            )
          }
        }
      )
    }
  }

  async anadirEntrega(id: number) {

    const { value: nombre } = await Swal.fire({

      title: 'Asigne un nombre a la entrega',
      input: 'text',
      text: ''

    })
    if (nombre) {
      console.log(id);
      this.service.anadirEntrega(nombre, id).subscribe(

        datos => {
          if (datos == 'OK') {
            console.log(nombre);

            Swal.fire(
              'Correcto',
            )
          } else {
            Swal.fire(
              'Error',
            )
          }
        }
      )
    }
  }


    randomCodigo() {
      let numero = '';
      const characters = '0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < charactersLength; i++) {
        numero += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.ranking.codigo = numero;
      return numero;

    }

    mostrar_codigo(name_r: string){
      console.log(this.ranking.codigo);
    }

   codigoRanking(id_r: number) {
    let numero = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      numero += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    console.log(Number(numero), id_r);

    this.service.actualizarCodigo(Number(numero), id_r).subscribe(
      (datos: any) => {
        if (datos == 'OK') {
          console.log('ok');

        }else{
          console.log('nooo');
        }
        window.location.reload();
      }
    );

    }

  verEntrega(id_r: number) {
    console.log(id_r);

    this.router.navigate(['adminEnt', id_r, this.profe.id_profesor]);
  }

  puntuar(id_r: number) {
    console.log(id_r);
    this.router.navigate(['punt', id_r]);
  }

  verAlumno(id_r: number) {
    console.log(id_r);
    this.router.navigate(['adminRank', id_r]);
  }


}

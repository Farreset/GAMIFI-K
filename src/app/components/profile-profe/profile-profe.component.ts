import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

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
  constructor(router: Router, route: ActivatedRoute, private service: ServerProfesorService) {

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
  }

  volver() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  editar() {
    this.router.navigate(['editar-profe', this.profe]);


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
}

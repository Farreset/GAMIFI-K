import {Component,OnInit} from '@angular/core';
import {Validators,FormBuilder, FormGroup} from '@angular/forms';
import {ServiceService} from 'src/app/server/service.service';
import {PasswordValidator} from 'src/app/validator/password.validator';
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import {Profe} from 'src/app/interfaces/interfaz';
import { ServerProfesorService} from 'src/app/server/server-profesor.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public profes: Profe[] = [];
  router: Router;
  profesGroup!: FormGroup;
  route: ActivatedRoute;
  profe: Profe = {
    id_profesor: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    centro: "",
    pssw: "",
    psswConf: "",

  }
  serverProfesorService: any;
  formBuilder: any;
  constructor(router: Router, route: ActivatedRoute, serverProfesorService: ServerProfesorService) {

    this.route = route;
    this.router = router;
    this.serverProfesorService = serverProfesorService;

  }

  ngOnInit1(): void {
    this.profe = {
      id_profesor: Number(this.route.snapshot.paramMap.get('id_profesor')),
      fname: String(this.route.snapshot.paramMap.get('fname')),
      lname: String(this.route.snapshot.paramMap.get('lname')),
      nick: String(this.route.snapshot.paramMap.get('nick')),
      mail: String(this.route.snapshot.paramMap.get('mail')),
      centro: String(this.route.snapshot.paramMap.get('centro')),
      pssw: String(this.route.snapshot.paramMap.get('pssw')),
      psswConf: String(this.route.snapshot.paramMap.get('psswConf'))

    }
  }
  ngOnInit(): void {
    this.profe = this.formBuilder.group({
      nick: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      fname: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
      lname: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
      centro: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      mail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      pssw: ['', [Validators.required, Validators.minLength(8)]],
      psswConf: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: PasswordValidator('pssw', 'psswConf')
    });
  }

  onSubmit() {
    this.modificarProfesor();

  }
  volver(){}
  modificarProfesor() {
    this.serverProfesorService.modificarProfesor(this.profe.id_profesor, this.profe.nick, this.profe.fname,
      this.profe.lname, this.profe.mail, this.profe.centro, this.profe.pssw, this.profe.psswConf).subscribe(
      datos => this.profe = datos
    );
    this.router.navigate(['login']);
  }
  get data() {
    return this.profesGroup.controls;
  }


}

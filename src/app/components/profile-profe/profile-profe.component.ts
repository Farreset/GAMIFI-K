import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-profe',
  templateUrl: './profile-profe.component.html'
})
export class ProfileProfeComponent implements OnInit {
<<<<<<< Updated upstream
=======
  public profes:Profe[] = [] ;
  router: Router;
  route: ActivatedRoute;
  profe:Profe = {
    id_profesor: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    centro: "",
    pssw: "",
    psswConf: "",

  }
<<<<<<< Updated upstream

  constructor(router: Router, route: ActivatedRoute) {
=======
  serverProfesorService: any;
  constructor(router: Router, route: ActivatedRoute, serverProfesorService: ServerProfesorService) {
>>>>>>> Stashed changes

    this.route = route;
    this.router = router;
  }
>>>>>>> Stashed changes

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
}
=======
          }
      }
      volver(){

        this.router.navigate(['']);
      }
<<<<<<< Updated upstream

      edit(){
=======
      editar(){
        this.router.navigate(['editar-profe', this.profe]);
      }
      addRank(){
>>>>>>> Stashed changes

        this.router.navigate(['edit']);
      }

    }
>>>>>>> Stashed changes

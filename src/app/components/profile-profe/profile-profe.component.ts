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

  constructor(router: Router, route: ActivatedRoute) {

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

      edit(){

        this.router.navigate(['edit']);
      }

    }
>>>>>>> Stashed changes

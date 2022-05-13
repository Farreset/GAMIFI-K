import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-admin',
  templateUrl: './ranking-admin.component.html',
  styleUrls: ['./ranking-admin.component.css']
})
export class RankingAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  // eliminarAlumno(id_alumno: number) {
  //   console.log(id_alumno);
  //   this.serverRankingService.deleteAlumnos(id_alumno);
  // }

  async eliminarAlumno(fname:string){
    const { value: mensaje } = await Swal.fire({
      title: 'Estas seguro de eliminar a '+fname+' del ranking?',
      text: "Para confirmar, escriba eliminar",
      input: 'text',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    })
    if(mensaje=="eliminar"){
      this.serverRankingService.deleteAlumno(this.alumno.id_alumno,this.id_ranking).subscribe(
        datos => {
          console.log('========');
          if (datos == 'OK'){
            Swal.fire(
              'Correcto',
              'Eliminado correctamente.',
              'success'
            )
          }else if (datos == 'No esta'){
            Swal.fire(
              'Error',
              'Este alumno no existe.',
              'error'
            )
            }
      }
    );
    }else{
            Swal.fire(
              'Error',
              'No se ha podido eliminar.',
              'error'
            )
          }
  }
>>>>>>> Stashed changes
}

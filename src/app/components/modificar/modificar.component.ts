import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  configuracioncvService: any;

  constructor() { }

  ngOnInit(): void {
  }
  getBloques() {
    this.configuracioncvService.editar()
      .subscribe(res => {
        let bloquesOrdenados = _.orderBy(res,['ordenCompleto'], ['asc'])
        this.configuracioncvService.bloques = bloquesOrdenados;
        console.log('BLOQUESRESTAPI', bloquesOrdenados)
      })
  }

}

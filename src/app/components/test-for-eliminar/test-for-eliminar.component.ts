import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-for-eliminar',
  templateUrl: './test-for-eliminar.component.html',
  styleUrls: ['./test-for-eliminar.component.css']
})
export class TestForELIMINARComponent implements OnInit {

  title = 'For LOOP';
  ranking=['Queso','Macarrones','Tomate','Virria'];

  rankingDetail=[
    {name: 'Queso', sabor: 'Fuerte',  origen: 'Galicia', id: '69'},
    {name: 'Macarrones', sabor: 'Medio',  origen: 'Italia', id: '70'},
    {name: 'Tomate', sabor: 'Suave',  origen: 'America', id: '71'},
    {name: 'Virria', sabor: 'Fuerte',  origen: 'Mexico', id: '72'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

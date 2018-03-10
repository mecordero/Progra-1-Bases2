import { Component, OnInit } from '@angular/core';
import { Estudiante } from './../estudiante';
import { MainService } from './../main.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css'],
  providers: [MainService]
})
export class CreacionComponent implements OnInit {

  constructor(private _mainService: MainService) { }

  ngOnInit() {
  }

  onSubmitAddEstudiante(estudiante: Estudiante){
      this._mainService.addEstudiante(estudiante);
  }
}

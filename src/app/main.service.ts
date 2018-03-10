import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Estudiante } from './estudiante';

@Injectable()
export class MainService {

  private _postUrl = '/api/estudiantes';

  constructor(private _http: Http) { }

  addEstudiante(estudiante: Estudiante){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options ​= ​ ​new ​ ​RequestOptions ​({ ​ headers ​: ​ headers ​});
    return this._http.post(this._postUrl, JSON.stringify(estudiante), options).
    map((response: Response) => response.json());
  }

}

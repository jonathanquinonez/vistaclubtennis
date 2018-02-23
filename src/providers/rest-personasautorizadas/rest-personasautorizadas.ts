import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppSettings} from '../../app/app.constants';

/*
  Generated class for the RestPersonasautorizadasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestPersonasautorizadasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestPersonasautorizadasProvider Provider');
  }

  // consulta de personas autorizadas por el afiliado con estado 1
  apiUrl = 'http://api.tennisgolfclub.com.co/public/';
  public getpersonasautorizadas() {
    return new Promise((resolve, reject) => {
       var cadena = localStorage.getItem('User');
    const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
        this.http.get(AppSettings.Api + 'personasinvitadasporsocios', { headers: headeres })
          .subscribe(data => {
            resolve(data),
            console.log(data);
          }, (err) => { 
            console.log("Error occured"+err);
          });
    });
  }
 
}

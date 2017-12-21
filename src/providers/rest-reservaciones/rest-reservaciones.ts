import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppSettings} from '../../app/app.constants';
/*
  Generated class for the RestReservacionesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestReservacionesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestReservacionesProvider Provider');
  }

  public getBloquesTennis() {
    return new Promise((resolve, reject) => {
       var cadena = localStorage.getItem('User');
    const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
        this.http.get(AppSettings.Api + 'misreservaciones/7', { headers: headeres })
          .subscribe(data => {
            resolve(data),
            console.log(data);
          }, (err) => { 
            console.log("Error occured"+err);
          });
    });
  }

  public getJugadores() {
    return new Promise((resolve, reject) => {
       var cadena = localStorage.getItem('User');
    const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
        this.http.get(AppSettings.Api + 'jugadoresxbloque/5', { headers: headeres })
          .subscribe(data => {
            resolve(data),
            console.log(data);
          }, (err) => { 
            console.log("Error occured"+err);
          });
    });
  }
  

}

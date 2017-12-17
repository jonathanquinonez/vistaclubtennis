import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestEventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestEventosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestEventosProvider Provider');
  }

  apiUrl = 'http://api.tennisgolfclub.com.co/public/eventos';
  public getEventos() {
     return new Promise(resolve => {
       this.http.get(this.apiUrl+'/mostrar').subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
     });
   }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestInstalacionesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestInstalacionesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestInstalacionesProvider Provider');
  }

  apiUrl = 'http://api.tennisgolfclub.com.co/public/instalaciones';
  public getInstalaciones() {
     return new Promise(resolve => {
       this.http.get(this.apiUrl+'/mostrar').subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
     });
   }


}

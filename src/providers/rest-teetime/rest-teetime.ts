import { HttpClient, HttpHeaders , HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppSettings} from '../../app/app.constants';

/*
  Generated class for the RestTeetimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestTeetimeProvider {
 

  constructor(public http: HttpClient) {
    console.log('Hello RestTeetimeProvider Provider');

  localStorage.getItem('User');
  localStorage.getItem('Datos');
  }

  //apiUrlteetime = 'http://api.tennisgolfclub.com.co/public';
  

 public getTeetime() {
  return new Promise((resolve, reject) => {
    //var headeres = new HttpHeaders();
     // headeres.append('Content-Type', 'application/json; charset=utf-8');
     var cadena = localStorage.getItem('User');

 // headeres.append('Authorization', 'Bearer '+cadena.replace(/['"]+/g, ''));
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
  //let headers = new Headers();
  //headeres.append('Content-Type', 'application/x-www-form-urlencoded');
  //headeres.append('Accept', 'application/json');
 // headeres.append('Authorization', 'Bearer ' + cadena);
 
// AppSettings.Api + 'personasinvitadasporsocios'
  //let other_header = headeres;
 // console.log(other_header.get);
  
      this.http.get('http://api.tennisgolfclub.com.co/public/personasinvitadasporsocios', { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}


}

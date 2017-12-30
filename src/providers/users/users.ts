
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppSettings} from '../../app/app.constants';



//let apiUrl = 'http://test.macondolabcucuta.com/ViValAPI/public/api/';
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  
  

login(credentials){


  return new Promise((resolve, reject)=>{
    let headeres = new HttpHeaders();
    headeres = headeres.set('Content-Type', 'application/json; charset=utf-8');
    
   if (credentials.correo_electronico === "" || credentials.password === "") {
       reject({message:"El usuario y contraseña son obligatorios"})
   } else {
     
       var body = {
           session:credentials
       }
       var url = AppSettings.Api + 'login';
     
       this.http.post(url, JSON.stringify(credentials),{ headers: headeres })
        .subscribe(
          data => {
            resolve(data);
            console.log(data);
          },
          err => {
            console.log("Error occured"+credentials.correo_electronico+credentials.password);
          }
        );
   }
});
}


  constructor( public http : HttpClient) {
    console.log('Hello UsersProvider Provider');
  }






}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppSettings} from '../../app/app.constants';
/*
  Generated class for the RestPqrsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestPqrsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestPqrsProvider Provider');
  }

  pqr(datos){
    
    console.log("entro al pqr");
      return new Promise((resolve, reject)=>{
        let headeres = new HttpHeaders();
        headeres = headeres.set('Content-Type', 'application/json; charset=utf-8');
        
           this.http.post(AppSettings.Api + 'buzon',{asunto:datos.asunto,correo_usuario:datos.correo,descripcion:datos.descripcion,estado:datos.estado}, { headers: headeres })
           .subscribe(
              data => {
                resolve(data);
                console.log(data);
              },
              err => {
                console.log("Error occured"+datos.asunto+datos.descripcion+datos.correo+datos.estado);
              }
            );
       
    });
    }


}

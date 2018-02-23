import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestEventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestEventosProvider {
  public idEvento;
  constructor(public http: HttpClient) {
    console.log('Hello RestEventosProvider Provider');
    this.idEvento = http.get("idEvento");
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

   apiUrlDetalle = 'http://api.tennisgolfclub.com.co/public/eventos/imagenes/';
   public getDetalleEvento(iddetalleevento) {
      return new Promise(resolve => {
        this.http.get(this.apiUrlDetalle+iddetalleevento).subscribe(data => {
          resolve(data);
          console.log(this.apiUrlDetalle+iddetalleevento);
        }, err => {
          console.log(err);
        });
      });
    }

    apiUrlidEvento = 'http://api.tennisgolfclub.com.co/public/eventos/mostrar/';
    public getEventoId(idevento) {
       return new Promise(resolve => {
         this.http.get(this.apiUrlidEvento+idevento).subscribe(data => {
           resolve(data);
           console.log(this.apiUrlidEvento+idevento);
         }, err => {
           console.log(err);
         });
       });
     }
 

}

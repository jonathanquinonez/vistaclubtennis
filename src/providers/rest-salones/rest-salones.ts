import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestSalonesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestSalonesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestSalonesProvider Provider');
  }

  apiUrlsalones = 'http://api.tennisgolfclub.com.co/public/instalaciones';
  public getSalones() {
     return new Promise(resolve => {
       this.http.get(this.apiUrlsalones+'/mostrar').subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
     });
   }

  // consulta todas las  imagenes del restaurante seleccionado
  apiUrlDetallesalon= 'http://api.tennisgolfclub.com.co/public/instalaciones/imagenes/';
  public getImgsalon(iddetallesalon) {
     return new Promise(resolve => {
       this.http.get(this.apiUrlDetallesalon+iddetallesalon).subscribe(data => {
         resolve(data);
         console.log(this.apiUrlDetallesalon+iddetallesalon);
       }, err => {
         console.log(err);
       });
     });
   }

   // consulta el restaurante seleccionado para traer la informacio del restaurante
   apiUrlidsalon= 'http://api.tennisgolfclub.com.co/public/instalaciones/mostrar/';
   public getDetalleSalonId(idsalon) {
      return new Promise(resolve => {
        this.http.get(this.apiUrlidsalon+idsalon).subscribe(data => {
          resolve(data);
          console.log(this.apiUrlidsalon+idsalon);
        }, err => {
          console.log(err);
        });
      });
    }


}

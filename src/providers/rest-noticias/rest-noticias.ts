import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestNoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestNoticiasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestNoticiasProvider Provider');
  }

  // consulta todos las instalaciones
  apiUrl = 'http://api.tennisgolfclub.com.co/public/noticias';
 public getNoticias(page) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/mostrar?page='+page).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

// consulta todas las  imagenes del restaurante seleccionado
  apiUrlDetalle = 'http://api.tennisgolfclub.com.co/public/instalaciones/imagenes/';
  public getImggastronomia(iddetallegastro) {
     return new Promise(resolve => {
       this.http.get(this.apiUrlDetalle+iddetallegastro).subscribe(data => {
         resolve(data);
         console.log(this.apiUrlDetalle+iddetallegastro);
       }, err => {
         console.log(err);
       });
     });
   }

   // consulta el restaurante seleccionado para traer la informacio del restaurante
   apiUrlidEvento = 'http://api.tennisgolfclub.com.co/public/instalaciones/mostrar/';
   public getDetalleGastronomiaId(idgastro) {
      return new Promise(resolve => {
        this.http.get(this.apiUrlidEvento+idgastro).subscribe(data => {
          resolve(data);
          console.log(this.apiUrlidEvento+idgastro);
        }, err => {
          console.log(err);
        });
      });
    }
  
}

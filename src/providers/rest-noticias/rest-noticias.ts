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

  // consulta todos las noticias por pagina
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

 // consulta todos las noticias por pagina
 apiUrl2 = 'http://api.tennisgolfclub.com.co/public/noticias';
 public getdetalleNoticias(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl2+'/mostrar/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


// consulta todas las  imagenes de las noticias seleccionada
  apiUrlDetalle = 'http://api.tennisgolfclub.com.co/public/noticias/imagenes/';
  public getImgnoticias(id) {
     return new Promise(resolve => {
       this.http.get(this.apiUrlDetalle+id).subscribe(data1 => {
         resolve(data1);
         console.log(this.apiUrlDetalle+id);
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

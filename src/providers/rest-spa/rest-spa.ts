import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestSpaProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestSpaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestSpaProvider Provider');
  }
// consulta todas las  imagenes del restaurante seleccionado
apiUrlDetalle = 'http://api.tennisgolfclub.com.co/public/instalaciones/imagenes/23';
public getImgspa() {
   return new Promise(resolve => {
     this.http.get(this.apiUrlDetalle).subscribe(data => {
       resolve(data);
       console.log(this.apiUrlDetalle);
     }, err => {
       console.log(err);
     });
   });
 }

       // consulta el restaurante seleccionado para traer la informacio del restaurante
   apiUrlidEvento = 'http://api.tennisgolfclub.com.co/public/instalaciones/mostrar/23';
   public getDetallespaId() {
      return new Promise(resolve => {
        this.http.get(this.apiUrlidEvento).subscribe(data => {
          resolve(data);
          console.log(this.apiUrlidEvento);
        }, err => {
          console.log(err);
        });
      });
    }
}

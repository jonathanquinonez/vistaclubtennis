import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestDeportesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestDeportesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestDeportesProvider Provider');
  }

  apiUrl = 'http://api.tennisgolfclub.com.co/public/instalaciones';
  public getDeportes() {
     return new Promise(resolve => {
       this.http.get(this.apiUrl+'/mostrar').subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
     });
   }

   // consulta todas las  imagenes del restaurante seleccionado
  apiUrlDetalle = 'http://api.tennisgolfclub.com.co/public/instalaciones/imagenes/';
  public getImgdeporte(iddetalledeporte) {
     return new Promise(resolve => {
       this.http.get(this.apiUrlDetalle+iddetalledeporte).subscribe(data => {
         resolve(data);
         console.log(this.apiUrlDetalle+iddetalledeporte);
       }, err => {
         console.log(err);
       });
     });
   }

   // consulta el restaurante seleccionado para traer la informacio del restaurante
   apiUrlidEvento = 'http://api.tennisgolfclub.com.co/public/instalaciones/mostrar/';
   public getDetalledeporteId(iddeporte) {
      return new Promise(resolve => {
        this.http.get(this.apiUrlidEvento+iddeporte).subscribe(data => {
          resolve(data);
          console.log(this.apiUrlidEvento+iddeporte);
        }, err => {
          console.log(err);
        });
      
      });
    
}

}

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
  
/////// servicios de la pagina teetime
 public getTeetime() {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'jugadoresxbloque/5', { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}


/////// servicios de la pagina jugadores
public getTunosxdisciplina(fecha) {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'turnosdisponibles/5/'+fecha, { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}

//// crear nueva reservacion de teetime

public postTeetime(id_turno,fecha_hora_fin,fecha_hora_inicio) {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.post(AppSettings.Api + 'bloques',{id_turnos:id_turno,correo_electronico_socio:localStorage["correo_user"],fecha_hora_inicio:fecha_hora_inicio,fecha_hora_fin:fecha_hora_fin}, { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}



}
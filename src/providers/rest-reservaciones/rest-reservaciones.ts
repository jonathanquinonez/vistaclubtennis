import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppSettings} from '../../app/app.constants';
/*
  Generated class for the RestReservacionesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestReservacionesProvider {

  

  constructor(public http: HttpClient) {
    console.log('Hello RestTeetimeProvider Provider');

  localStorage.getItem('User');
  localStorage.getItem('Datos');
  }

  //apiUrlteetime = 'http://api.tennisgolfclub.com.co/public';
  
/////// servicios de la pagina teetime
 public getTeetimetennis() {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'jugadoresxbloque/7', { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}


/////// servicios de la pagina jugadores
public getTunosxdisciplina(fecha,id_cancha) {

  console.log("entro get turnos "+fecha+" id "+id_cancha)
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'turnosdisponibles/'+id_cancha+"/"+fecha, { headers: headeres })
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
  if(id_turno != null){
    return new Promise((resolve, reject) => {
      var cadena = localStorage.getItem('User');
      var correo = localStorage.getItem("correo_user").replace(/['"]+/g, '');
   const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
       this.http.post(AppSettings.Api + 'bloques',{id_turnos:id_turno,correo_electronico_socio:correo,fecha_hora_inicio:fecha_hora_inicio,fecha_hora_fin:fecha_hora_fin}, { headers: headeres })
         .subscribe(data => {
           resolve(data),
           console.log(data);
         }, (err) => {
           
           console.log("Error occured"+err);
         });
   });
  }else{
     
  }
  
}

//// crear jugadores para la reservacion teetime

public postjugadores(id_bloque,jugadores) {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
     
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.post(AppSettings.Api + 'jugadores',{id_bloques:id_bloque,nombre:jugadores}, { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}

//// eliminar por id de bloques

public deletedbloque(id_bloque) {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
     
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.delete(AppSettings.Api + 'bloques/'+id_bloque, { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}

//// consultar turnos por id - para obtener las horas y enviarlas a la reserva
/////// servicios de la pagina teetime
public getTurno(idturno) {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'turnos/'+idturno, { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}


// actualizar estado de turno seleccionado - estado apsa a 1 - recibe un id de turno
public getTurnoestado(idturno) {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'estadoturno/'+idturno, { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}

public getcanchastennis() {
  return new Promise((resolve, reject) => {
     var cadena = localStorage.getItem('User');
  const headeres = new HttpHeaders({'Authorization':'Bearer '+cadena.replace(/['"]+/g, '')});
      this.http.get(AppSettings.Api + 'canchas', { headers: headeres })
        .subscribe(data => {
          resolve(data),
          console.log(data);
        }, (err) => {
          
          console.log("Error occured"+err);
        });
  });
}


}

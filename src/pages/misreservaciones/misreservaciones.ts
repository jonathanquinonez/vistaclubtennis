import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JugadoresTennisPage } from '../jugadores-tennis/jugadores-tennis';
import { RestReservacionesProvider } from '../../providers/rest-reservaciones/rest-reservaciones';

/**
 * Generated class for the MisreservacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misreservaciones',
  templateUrl: 'misreservaciones.html',
})
export class MisreservacionesPage {
  datateetime:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restreservaciones:RestReservacionesProvider) {
    console.log( localStorage.getItem('User'))
    console.log( localStorage.getItem('Datos'))
    this.getTeetime();
  }

  //// consulta todos los usuarios autorizados al teetime de ese usuario
 getTeetime() {
  this.restreservaciones.getTeetimetennis()
  .then(datos => {
    this.datateetime = datos;
   
 
    console.log((datos));
  })
}

  menu(){
    this.navCtrl.push(JugadoresTennisPage);
   }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MisreservacionesPage');
  }

}

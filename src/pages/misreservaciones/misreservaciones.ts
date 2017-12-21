import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
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
    this.getJugadores();
  }

  menu(){
    this.navCtrl.push(MenuPage);
   }

   getJugadores() {
    this.restreservaciones.getJugadores()
    .then(data3 => {
      this.datateetime = data3;
    // this.datateetime.data = this.datateetime;
      console.log("este es el usuario autorizado"+data3);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisreservacionesPage');
  }

}

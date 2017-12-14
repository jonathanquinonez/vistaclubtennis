import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MisreservacionesPage } from '../misreservaciones/misreservaciones';
/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  misreservaciones(){
    this.navCtrl.push(MisreservacionesPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}

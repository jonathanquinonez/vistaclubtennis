import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';
/**
 * Generated class for the TeetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teetime',
  templateUrl: 'teetime.html',
})
export class TeetimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  jugadores(){
    this.navCtrl.push(JugadoresPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeetimePage');
  }

}

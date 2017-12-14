import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutorizaraccesoPage } from '../autorizaracceso/autorizaracceso';
/**
 * Generated class for the MisinvitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misinvitaciones',
  templateUrl: 'misinvitaciones.html',
})
export class MisinvitacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisinvitacionesPage');
  }
  autorizaracceso(){
    this.navCtrl.push(AutorizaraccesoPage);}

}

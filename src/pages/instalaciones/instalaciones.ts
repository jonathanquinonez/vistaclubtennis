import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SalonesPage } from '../salones/salones';
import { SpaPage } from '../spa/spa';
import { ZonarecreativaPage } from '../zonarecreativa/zonarecreativa';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal';
/**
 * Generated class for the InstalacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instalaciones',
  templateUrl: 'instalaciones.html',
})
export class InstalacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  menuprincipal(){
    this.navCtrl.push(MenuprincipalPage);
   }
  salones(){
    this.navCtrl.push(SalonesPage);
  }
  spa(){
    this.navCtrl.push(SpaPage);
  }
  zonarecreativa(){
    this.navCtrl.push(ZonarecreativaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesPage');
  }

}

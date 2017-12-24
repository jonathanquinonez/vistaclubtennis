import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AutorizaraccesoPage } from '../autorizaracceso/autorizaracceso';
import { TeetimePage } from '../teetime/teetime';
import { MisreservacionesPage } from '../misreservaciones/misreservaciones';
import { JugadoresPage } from '../jugadores/jugadores';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal';
import { MisinvitacionesPage } from '../misinvitaciones/misinvitaciones';
import { PersonasautorizadasPage } from '../personasautorizadas/personasautorizadas';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home1(){
    this.navCtrl.push(HomePage);
   }
   autorizaracceso(){
    this.navCtrl.push(AutorizaraccesoPage);
   }
   teetime(){
    this.navCtrl.push(TeetimePage);
   }
   misreservas(){
    this.navCtrl.push(MisreservacionesPage);
   }
   jugadores(){
    this.navCtrl.push(JugadoresPage);
   }
   menuprincipal(){
    this.navCtrl.push(MenuprincipalPage);
   }
 misinvitaciones(){
   this.navCtrl.push(MisinvitacionesPage);
 }
 personasautorizadas(){
  this.navCtrl.push(PersonasautorizadasPage);
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

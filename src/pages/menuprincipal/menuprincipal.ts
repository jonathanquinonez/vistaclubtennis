import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GastronomiaPage } from '../gastronomia/gastronomia';
import { InstalacionesPage } from '../instalaciones/instalaciones';
import { DeportesPage } from '../deportes/deportes';
import { EventosPage } from '../eventos/eventos';
import { MenuPage } from '../menu/menu';
import { NoticiasPage } from '../noticias/noticias';

/**
 * Generated class for the MenuprincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuprincipal',
  templateUrl: 'menuprincipal.html',
})
export class MenuprincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams){
  }

  gastronomia(){
    this.navCtrl.push(GastronomiaPage);
  }

  instalaciones(){
    this.navCtrl.push(InstalacionesPage);
  }

  deportes(){
    this.navCtrl.push(DeportesPage);
  }

  eventos(){
    this.navCtrl.push(EventosPage);
  }

  menu2(){
    this.navCtrl.push(MenuPage);
  }

  noticias(){
    this.navCtrl.push(NoticiasPage);
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad MenuprincipalPage');
  }

}

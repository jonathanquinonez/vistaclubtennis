import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GastronomiaPage } from '../gastronomia/gastronomia';
import { InstalacionesPage } from '../instalaciones/instalaciones';
import { DeportesPage } from '../deportes/deportes';
import { EventosPage } from '../eventos/eventos';
import { MenuPage } from '../menu/menu';
import { TeetimePage } from '../teetime/teetime';
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

logueado1;

  constructor(public navCtrl: NavController, public navParams: NavParams){
     if(localStorage["User"] == null || localStorage["User"] == undefined){
       console.log(localStorage["User"] + "user");
      
              this.logueado1 = false;
        }
        else{
          this.logueado1 = true;
        }
        
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
teetime(){
    this.navCtrl.push(TeetimePage);
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad MenuprincipalPage');
  }

}

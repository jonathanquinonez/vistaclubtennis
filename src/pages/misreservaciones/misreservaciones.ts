import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  menu(){
    this.navCtrl.push(MenuPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisreservacionesPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalledeportePage } from  '../detalledeporte/detalledeporte';

import { RestDeportesProvider } from '../../providers/rest-deportes/rest-deportes';
/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deportes',
  templateUrl: 'deportes.html',
})
export class DeportesPage {

  deportes:any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams , public restdeportesprovider: RestDeportesProvider) {
    this.getDeportes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeportesPage');
  }

  getDeportes() {
    this.restdeportesprovider.getDeportes()
    .then(data => {
      this.deportes = data;
     
      console.log(this.deportes);
    })
  }

  detalledeporte(id){
    this.navCtrl.push(DetalledeportePage, {
      iddetalledeporte: id,
    });
  }

}
